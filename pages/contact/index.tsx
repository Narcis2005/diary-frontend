import { useState } from "react";
import ContactComponent from "../../components/ContactComponent";
import DefaultContainer from "../../containers/DefaultContaienr";

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
            <DefaultContainer>
                <ContactComponent onChange={onChange} onSubmit={onSubmit} value={data} />
            </DefaultContainer>
        </>
    );
};

export default Contact;
