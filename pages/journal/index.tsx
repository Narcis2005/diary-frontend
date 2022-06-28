import { useEffect, useState } from "react";
import JournalComponent from "../../components/JournalComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import withAuth from "../../utils/withAuth";

const Journal = () => {
    interface IResult {
        content: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }
    interface IData {
        status: "idle" | "loading" | "succesfull" | "failed";
        result: IResult[] | null;
        error: string | null;
    }
    const [data, setData] = useState<IData>({ status: "idle", result: null, error: null });
    useEffect(() => {
        window.scrollTo(0, 0);
        api.get<IResult[]>("/diary")
            .then((res) => {
                setData({ status: "succesfull", result: res.data, error: null });
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setData({ status: "failed", result: null, error: err });
            });
    }, []);
    return (
        <>
            <DefaultContainer>
                {data.result && data.result.length > 0 && (
                    <>
                        <JournalComponent
                            data={data.result?.map((entry) => ({
                                content: entry.content,
                                date: new Date(entry.createdAt),
                                id: entry.id,
                            }))}
                        />
                    </>
                )}
                {(!data.result || data.result.length === 0) && (
                    <JournalComponent data={[{ content: "Start Writing here", date: new Date(), id: 1 }]} />
                )}
            </DefaultContainer>
        </>
    );
};

export default withAuth(Journal);
