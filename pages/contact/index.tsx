import { useState } from "react";
import ContactComponent from "../../components/ContactComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import Head from "next/head";
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
const Contact = () => {
    const [data, setData] = useState({ message: "", subject: "", email: "", fullName: "" });
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    const [callData, setCallData] = useState<IData>({ status: "idle", result: null, error: null });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCallData({ status: "loading", result: null, error: null });
        api.post<IResult>("/contact", { ...data })
            .then((res) => {
                setCallData({ status: "succesfull", result: res.data, error: null });
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setCallData({ status: "failed", result: null, error: err });
            });
    };

    return (
        <>
            <Head>
                <title>Contact - Diary</title>
                <meta name="description" content="Contact us if you find bugs or have questions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
                <ContactComponent onChange={onChange} onSubmit={onSubmit} value={data} callData={callData} />
            </DefaultContainer>
        </>
    );
};

export default Contact;
