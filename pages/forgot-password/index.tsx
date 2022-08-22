import { useState } from "react";
import ForgotPasswordComponent from "../../components/ForgotPasswordComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
interface IResult {
    message: string;
}
export interface IData {
    status: "idle" | "loading" | "succesfull" | "failed";
    result: IResult | null;
    error: string | null;
}
const ForgotPassword = () => {
    const [value, setValue] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const [callData, setCallData] = useState<IData>({ status: "idle", result: null, error: null });
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCallData({ status: "loading", result: null, error: null });
        api.post<IResult>("/auth/forgot-password", {
            email: value,
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
        setValue("");
    };
    return (
        <DefaultContainer>
            <ForgotPasswordComponent onSubmit={onSubmit} callData={callData} onChange={onChange} value={value} />
        </DefaultContainer>
    );
};

export default ForgotPassword;
