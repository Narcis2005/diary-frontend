import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ResetPasswordComponent from "../../../components/ResetPasswordComponent";
import DefaultContainer from "../../../containers/DefaultContaienr";
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
const ResetPassword = () => {
    const router = useRouter();
    const token = router.query.token as string;
    const [values, setValues] = useState({ newPassword: "", repeatedNewPassword: "" });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const [callData, setCallData] = useState<IData>({ status: "idle", result: null, error: null });
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCallData({ status: "loading", result: null, error: null });
        api.put<IResult>("/auth/reset-password", {
            newPassword: values.newPassword,
            repeatedNewPassword: values.repeatedNewPassword,
            token: token,
        })
            .then((res) => {
                setCallData({ status: "succesfull", result: res.data, error: null });
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setCallData({ status: "failed", result: null, error: err });
            });
        setValues({ newPassword: "", repeatedNewPassword: "" });
    };
    return (
        <>
            <Head>
                <title>Diary - Change password</title>
                <meta name="description" content="Change your password on diary" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
                <ResetPasswordComponent onChange={onChange} callData={callData} onSubmit={onSubmit} values={values} />
            </DefaultContainer>
        </>
    );
};

export default ResetPassword;
