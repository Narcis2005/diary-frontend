import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultContainer from "../../../containers/DefaultContaienr";
import { useAppDispatch } from "../../../redux/hooks";
import { logoutUser } from "../../../redux/slices/auth";
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
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (token) {
            api.delete<IResult>("/auth/delete", { data: { token: token } })
                .then((res) => {
                    setCallData({ status: "succesfull", result: res.data, error: null });
                    void dispatch(logoutUser());
                })
                .catch((error: Error) => {
                    const err = handleAxiosError(error);
                    //handled by axios interceptor
                    if (err === "return") return;
                    setCallData({ status: "failed", result: null, error: err });
                });
        }
    }, [token]);
    return (
        <>
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
