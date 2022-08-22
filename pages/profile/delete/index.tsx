import React, { useState } from "react";
import DeleteComponent from "../../../components/DeleteComponent";
import DefaultContainer from "../../../containers/DefaultContaienr";
import api from "../../../utils/api";
import handleAxiosError from "../../../utils/handleAxiosError";
import withAuth from "../../../utils/withAuth";
interface IResult {
    message: string;
}
export interface IData {
    status: "idle" | "loading" | "succesfull" | "failed";
    result: IResult | null;
    error: string | null;
}
const Delete = () => {
    const [value, setValue] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const [callData, setCallData] = useState<IData>({ status: "idle", result: null, error: null });
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCallData({ status: "loading", result: null, error: null });
        api.post<IResult>("/auth/send-delete-account-email", { password: value })
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
            <DeleteComponent onChange={onChange} onSubmit={onSubmit} callData={callData} value={value} />
        </DefaultContainer>
    );
};
export default withAuth(Delete);
