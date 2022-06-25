/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState } from "react";
import api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";

const Testauth = () => {
    interface IResult {
        message: string;
    }
    interface IData {
        status: "idle" | "loading" | "succesfull" | "failed";
        result: IResult | null;
        error: string | null;
    }
    const [requestData, setRequestData] = useState<IData>({ status: "idle", result: null, error: null });
    useEffect(() => {
        api.post<IResult>("/test")
            .then((res) => {
                setRequestData({ status: "succesfull", result: res.data, error: null });
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setRequestData({ status: "failed", result: null, error: err });
            });
    }, []);
    return (
        <>
            {requestData.result && requestData.result.message && <h1>{requestData.result.message}</h1>}
            {requestData.error && <h1>{requestData.error}</h1>}
        </>
    );
};

export default Testauth;
