import Link from "next/link";
import React from "react";
import {
    Button,
    Form,
    Input,
    Label,
    LabelinputContainer,
    Message,
    RedirectText,
    RedirectTextContainer,
    Title,
} from "../FormComponents";

const LoginComponent = ({
    onChange,
    value,
    onSubmit,
    error,
    isLoading,
}: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: { username: string; password: string };
    onSubmit: (e: React.FormEvent) => void;
    error: string | null;
    isLoading: boolean;
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
                <Button type="submit">{isLoading ? "Loading..." : "Login"}</Button>
                <RedirectTextContainer>
                    <Link href="/register" passHref>
                        <RedirectText>You dont have an account? Create one here</RedirectText>
                    </Link>
                    <Link href="/forgot-password" passHref>
                        <RedirectText>Press here if you need to reset your password</RedirectText>
                    </Link>
                </RedirectTextContainer>
                {error && <Message>{error}</Message>}
            </Form>
        </>
    );
};

export default LoginComponent;
