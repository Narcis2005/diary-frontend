import { Button, Form, Input, Label, LabelinputContainer, Message, Title } from "../FormComponents";

const LoginComponent = () => {
    return (
        <>
        <Form>
            <Title>Login</Title>
            <LabelinputContainer>
                <Label htmlFor="username">Username</Label>
                <Input name="username" type="text" placeholder="John"/>
            </LabelinputContainer>
            <LabelinputContainer>
                <Label htmlFor="password">Password</Label>
                <Input name="password" type="password" placeholder="****"/>
            </LabelinputContainer>
            <Button>Login</Button>
            <Message>You were succesfully logged in</Message>
        </Form>
        </>
    );
};

export default LoginComponent;