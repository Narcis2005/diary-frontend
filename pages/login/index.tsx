/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextPage } from "next/types";
import React, { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import LoginComponent from "../../components/LoginComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../redux/slices/auth";
import withoutAuth from "../../utils/withoutAuth";

const Login: NextPage = () => {
    const [data, setData] = useState({ username: "", password: "" });
    const dispatch = useAppDispatch();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        void dispatch(loginUser(data));
    };
    const user = useAppSelector((state) => state.user);

    return (
        <>
            <DefaultContainer>
                <BackgroundImage>
                    <LoginComponent value={data} onChange={onChange} onSubmit={onSubmit} error={user.error?.message} isLoading={user.status === "loading"}/>
                </BackgroundImage>
            </DefaultContainer>
        </>
    );
};

export default withoutAuth(Login);
