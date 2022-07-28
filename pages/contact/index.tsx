import { useState } from "react";
import ContactComponent from "../../components/ContactComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import Head from "next/head";
const Contact = () => {
    const [data, setData] = useState({ message: "", subject: "", email: "", fullName: "" });
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <>
            <Head>
                <title>Contact - Diary</title>
                <meta name="description" content="Contact us if you find bugs or have questions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
                <ContactComponent onChange={onChange} onSubmit={onSubmit} value={data} />
            </DefaultContainer>
        </>
    );
};

export default Contact;
