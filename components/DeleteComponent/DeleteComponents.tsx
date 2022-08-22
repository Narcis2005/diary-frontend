import styled from "styled-components";
import { Input, Label, LabelinputContainer, Message } from "../FormComponents";

export const DeleteComponentContainer = styled.div`
    min-height: 90vh;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
`;
export const DeleteComponentForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    @media (max-width: 920px) {
        width: 60%;
    }
`;
export const DeleteComponentTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 2rem;
`;
export const DeleteComponentInput = styled(Input)`
    width: 100%;
`;
export const DeleteComponentLabelInputContainer = styled(LabelinputContainer)`
    width: 100%;
    padding: 3px 0;
`;
export const DeleteComponentLabel = styled(Label)``;

interface IMessage {
    color: string;
}
export const DeleteComponentMessage = styled(Message)<IMessage>`
    background-color: ${({ color }) => color};
`;
