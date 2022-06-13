import { Button, Form, Input, Label, LabelinputContainer, Message, Title } from "../FormComponents";

const RegisterComponent = ({
    onChange,
    value,
    onSubmit,
}: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: { username: string; password: string; email: string; fullname: string };
    onSubmit: (e: React.FormEvent) => void;
}) => {
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Title>Register</Title>
                <LabelinputContainer>
                    <Label htmlFor="fullname">Full name</Label>
                    <Input
                        name="fullname"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={value.fullname}
                        onChange={onChange}
                    />
                </LabelinputContainer>
                <LabelinputContainer>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        name="username"
                        type="text"
                        placeholder="John"
                        required
                        value={value.username}
                        onChange={onChange}
                    />
                </LabelinputContainer>
                <LabelinputContainer>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="****"
                        required
                        value={value.password}
                        onChange={onChange}
                    />
                </LabelinputContainer>
                <LabelinputContainer>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={value.email}
                        onChange={onChange}
                    />
                </LabelinputContainer>
                <Button>Sign up</Button>
                <Message>Your account was created</Message>
            </Form>
        </>
    );
};

export default RegisterComponent;
