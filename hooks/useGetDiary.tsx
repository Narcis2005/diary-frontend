import { useState, useEffect } from "react";
import api from "../utils/api";
import handleAxiosError from "../utils/handleAxiosError";

const useGetDiary = () => {
    interface IDiaryResult {
        content: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }
    interface IDataDiaryCall {
        status: "idle" | "loading" | "succesfull" | "failed";
        diary: IDiaryResult[] | null;
        error: string | null;
    }
    const [data, setData] = useState<IDataDiaryCall>();
    useEffect(() => {
        setData({ status: "loading", diary: null, error: null });
        api.get<IDiaryResult[]>("/diary")
            .then((res) => {
                setData({ status: "succesfull", diary: res.data, error: null });
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setData({ status: "failed", diary: null, error: err });
            });
    }, []);

    if (data?.status != "loading" && (data === undefined || data.diary === undefined || data.diary === null)) {
        return {
            status: "succesfull",
            diary: [{ content: "Start Writing here", createdAt: new Date(), id: 1 }],
            error: null,
        };
    }
    return data;
};

export default useGetDiary;
