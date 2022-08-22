import React from "react";
import { IData } from "../../pages/profile/delete";
import { Button } from "../FormComponents";
import {
    DeleteComponentContainer,
    DeleteComponentForm,
    DeleteComponentInput,
    DeleteComponentLabel,
    DeleteComponentLabelInputContainer,
    DeleteComponentMessage,
    DeleteComponentTitle,
} from "./DeleteComponents";

interface IDeleteComponent {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    callData: IData;
    value: string;
}

const DeleteComponent = ({ onChange, onSubmit, callData, value }: IDeleteComponent) => {
    return (
        <>
            <DeleteComponentContainer>
                <DeleteComponentForm onSubmit={onSubmit}>
                    <DeleteComponentTitle>Delete Account</DeleteComponentTitle>
                    <DeleteComponentLabelInputContainer>
                        <DeleteComponentLabel htmlFor="password">Password</DeleteComponentLabel>
                        <DeleteComponentInput
                            onChange={onChange}
                            name="password"
                            type="password"
                            required
                            value={value}
                            placeholder="You need to type your password"
                        />
                    </DeleteComponentLabelInputContainer>
                    <DeleteComponentLabelInputContainer>
                        <Button>Delete</Button>
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
        </>
    );
};

export default DeleteComponent;
