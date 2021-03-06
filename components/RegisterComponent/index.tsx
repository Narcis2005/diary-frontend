import Link from "next/link";
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

const RegisterComponent = ({
    onChange,
    value,
    onSubmit,
    error,
    isLoading,
}: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: { username: string; password: string; email: string; fullName: string };
    onSubmit: (e: React.FormEvent) => void;
    error: string | null;
    isLoading: boolean;
}) => {
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Title>Register</Title>
                <LabelinputContainer>
                    <Label htmlFor="fullName">Full name</Label>
                    <Input
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={value.fullName}
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
                <Button>{isLoading ? "Loading..." : "Register"}</Button>
                <RedirectTextContainer>
                    <Link href="/loading" passHref>
                        <RedirectText>You aleardy have an account? Sign in here!</RedirectText>
                    </Link>
                </RedirectTextContainer>
                {error && <Message>{error}</Message>}
            </Form>
        </>
    );
};

export default RegisterComponent;
