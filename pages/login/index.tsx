import { NextPage } from "next/types";
import React, { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import LoginComponent from "../../components/LoginComponent";
import DefaultContainer from "../../containers/DefaultContaienr";

const Login: NextPage = () => {
    const [data, setData] = useState({ username: "", password: "" });
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
                    <LoginComponent value={data} onChange={onChange} onSubmit={onSubmit} />
                </BackgroundImage>
            </DefaultContainer>
        </>
    );
};

export default Login;
