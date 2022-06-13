import { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import RegisterComponent from "../../components/RegisterComponent";
import DefaultContainer from "../../containers/DefaultContaienr";

const Register = () => {
    const [data, setData] = useState({ username: "", password: "", email: "", fullname: "" });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <>
            <DefaultContainer>
                <BackgroundImage>
                    <RegisterComponent value={data} onChange={onChange} onSubmit={onSubmit} />
                </BackgroundImage>
            </DefaultContainer>
        </>
    );
};

export default Register;
