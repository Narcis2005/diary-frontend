import React from "react";
import { Button, Form, Input, Label, LabelinputContainer, Message, Title } from "../FormComponents";

const LoginComponent = ({
    onChange,
    value,
    onSubmit,
}: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: { username: string; password: string };
    onSubmit: (e: React.FormEvent) => void;
}) => {
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Title>Login</Title>
                <LabelinputContainer>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        name="username"
                        type="text"
                        required
                        placeholder="John"
                        value={value.username}
                        onChange={onChange}
                    />
                </LabelinputContainer>
                <LabelinputContainer>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        name="password"
                        type="password"
                        required
                        placeholder="****"
                        value={value.password}
                        onChange={onChange}
                    />
                </LabelinputContainer>
                <Button type="submit">Login</Button>
                <Message>You were succesfully logged in</Message>
            </Form>
        </>
    );
};

export default LoginComponent;
