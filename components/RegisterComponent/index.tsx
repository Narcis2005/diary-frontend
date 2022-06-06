import { Button, Form, Input, Label, LabelinputContainer, Message, Title } from "../FormComponents";

const RegisterComponent = () => {
    return (
        <>
        <Form>
            <Title>Register</Title>
            <LabelinputContainer>
                <Label htmlFor="fullname">Full name</Label>
                <Input name="fullname" type="text" placeholder="John Doe"/>
            </LabelinputContainer>
            <LabelinputContainer>
                <Label htmlFor="username">Username</Label>
                <Input name="username" type="text" placeholder="John"/>
            </LabelinputContainer>
            <LabelinputContainer>
                <Label htmlFor="password">Password</Label>
                <Input name="password" type="password" placeholder="****"/>
            </LabelinputContainer>
            <LabelinputContainer>
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" placeholder="john@example.com"/>
            </LabelinputContainer>
            <Button>Sign up</Button>
            <Message>Your account was created</Message>
        </Form>
        </>
    );
};

export default RegisterComponent;