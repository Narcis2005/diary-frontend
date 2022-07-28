import { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import RegisterComponent from "../../components/RegisterComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import { useAppDispatch } from "../../redux/hooks";
import { getUserByToken } from "../../redux/slices/auth";
import api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import withoutAuth from "../../utils/withoutAuth";
import Head from "next/head";
const Register = () => {
    const [data, setData] = useState({ username: "", password: "", email: "", fullName: "" });
    interface IResult {
        message: string;
    }
    interface IData {
        status: "idle" | "loading" | "succesfull" | "failed";
        result: IResult | null;
        error: string | null;
    }
    const [requestData, setRequestData] = useState<IData>({ status: "idle", result: null, error: null });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };
    const dispatch = useAppDispatch();
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRequestData({ status: "loading", result: null, error: null });
        api.post<IResult>("/auth/register", data)
            .then((res) => {
                setRequestData({ status: "succesfull", result: res.data, error: null });
                void dispatch(getUserByToken());
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setRequestData({ status: "failed", result: null, error: err });
            });
    };
    return (
        <>
            <Head>
                <title>Register - Diary</title>
                <meta
                    name="description"
                    content="At diary you can write your online personal diary and save it in a secure way."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
                <BackgroundImage>
                    <RegisterComponent
                        value={data}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        error={requestData.error}
                        isLoading={requestData.status === "loading"}
                    />
                </BackgroundImage>
            </DefaultContainer>
        </>
    );
};

export default withoutAuth(Register);
