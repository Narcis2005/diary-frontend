import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultContainer from "../../../containers/DefaultContaienr";
import useLogout from "../../../hooks/useLogout";
import api from "../../../utils/api";
import handleAxiosError from "../../../utils/handleAxiosError";
interface IResult {
    message: string;
}
export interface IData {
    status: "idle" | "loading" | "succesfull" | "failed";
    result: IResult | null;
    error: string | null;
}
const ConfirmAccountRemoval = () => {
    const [callData, setCallData] = useState<IData>({ status: "idle", result: null, error: null });
    const router = useRouter();
    const token = router.query.token as string;
    const logout = useLogout();
    useEffect(() => {
        if (token) {
            api.delete<IResult>("/auth/delete", { data: { token: token } })
                .then((res) => {
                    setCallData({ status: "succesfull", result: res.data, error: null });
                    logout();
                })
                .catch((error: Error) => {
                    const err = handleAxiosError(error);
                    //handled by axios interceptor
                    if (err === "return") return;
                    setCallData({ status: "failed", result: null, error: err });
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    return (
        <>
            <Head>
                <title>Diary - Delete account</title>
                <meta name="description" content="Your account is deleted here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {callData.status === "succesfull" && void router.push("/")}
            {callData.status === "failed" && (
                <DefaultContainer>
                    <h1>{callData.error}</h1>
                </DefaultContainer>
            )}
        </>
    );
};

export default ConfirmAccountRemoval;
