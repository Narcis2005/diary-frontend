import { IData } from "../../pages/profile/delete";
import {
    DeleteComponentContainer,
    DeleteComponentForm,
    DeleteComponentTitle,
    DeleteComponentLabelInputContainer,
    DeleteComponentLabel,
    DeleteComponentInput,
    DeleteComponentMessage,
} from "../DeleteComponent/DeleteComponents";
import { Button } from "../FormComponents";

interface IDeleteComponent {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    callData: IData;
    value: string;
}

const ForgotPasswordComponent = ({ onChange, onSubmit, callData, value }: IDeleteComponent) => {
    return (
        <DeleteComponentContainer>
            <DeleteComponentForm onSubmit={onSubmit}>
                <DeleteComponentTitle>Password forgotten</DeleteComponentTitle>
                <DeleteComponentLabelInputContainer>
                    <DeleteComponentLabel htmlFor="email">Type your email</DeleteComponentLabel>
                    <DeleteComponentInput
                        onChange={onChange}
                        name="email"
                        type="email"
                        required
                        value={value}
                        placeholder="Your email"
                    />
                </DeleteComponentLabelInputContainer>
                <DeleteComponentLabelInputContainer>
                    <Button>Send Email</Button>
                </DeleteComponentLabelInputContainer>
                <DeleteComponentLabelInputContainer>
                    {callData.status === "succesfull" && callData.result && callData.result.message && (
                        <DeleteComponentMessage color="#2bc42b">{callData.result.message}</DeleteComponentMessage>
                    )}
                    {callData.status === "failed" && callData.error && (
                        <DeleteComponentMessage color="darkred">{callData.error}</DeleteComponentMessage>
                    )}
                    {callData.status === "loading" && (
                        <DeleteComponentMessage color="gray">Loading...</DeleteComponentMessage>
                    )}
                </DeleteComponentLabelInputContainer>
            </DeleteComponentForm>
        </DeleteComponentContainer>
    );
};

export default ForgotPasswordComponent;
