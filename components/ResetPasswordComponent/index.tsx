import { IData } from "../../pages/profile/reset-password/[token]";
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
    values: {
        newPassword: string;
        repeatedNewPassword: string;
    };
}
const ResetPasswordComponent = ({ onChange, onSubmit, callData, values }: IDeleteComponent) => {
    return (
        <DeleteComponentContainer>
            <DeleteComponentForm onSubmit={onSubmit}>
                <DeleteComponentTitle>Reset password</DeleteComponentTitle>
                <DeleteComponentLabelInputContainer>
                    <DeleteComponentLabel htmlFor="newPassword">New Password</DeleteComponentLabel>
                    <DeleteComponentInput
                        onChange={onChange}
                        name="newPassword"
                        type="password"
                        required
                        value={values.newPassword}
                        placeholder="You need to type your password"
                    />
                </DeleteComponentLabelInputContainer>
                <DeleteComponentLabelInputContainer>
                    <DeleteComponentLabel htmlFor="repeatedNewPassword">Repeat New Password</DeleteComponentLabel>
                    <DeleteComponentInput
                        onChange={onChange}
                        name="repeatedNewPassword"
                        type="password"
                        required
                        value={values.repeatedNewPassword}
                        placeholder="You need to type your password again"
                    />
                </DeleteComponentLabelInputContainer>
                <DeleteComponentLabelInputContainer>
                    <Button>Reset</Button>
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

export default ResetPasswordComponent;
