import { useEffect, useState } from "react";
import JournalComponent from "../../components/JournalComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import withAuth from "../../utils/withAuth";
import { useAppSelector } from "../../redux/hooks";
import Head from "next/head";
const Journal = () => {
    interface IResult {
        content: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }
    const user = useAppSelector((state) => state.user);

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
            <Head>
                <title>{user.result.username}&apos;s diary</title>
                <meta name="description" content={`The private diary of ${user.result.fullName}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
