import styled from "styled-components";
import { Button, LabelinputContainer, Message } from "../FormComponents";

export const ContactContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    @media (max-width: 920px) {
        flex-direction: column;
    }
`;
export const ContactLeftSideContainer = styled.div`
    width: 50%;
    flex: 50%;
    background: black;
    color: white;
    padding: 4rem 2rem 4rem 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -4rem;
    position: relative;
    @media (max-width: 920px) {
        width: 100%;
        flex: 100%;
        margin-top: 0;
        padding: 4rem 10%;
    }
`;
export const ContactTitle = styled.h2`
    font-size: 3.5rem;
    padding-bottom: 10px;
`;
export const ContactText = styled.p`
    line-height: 1.8rem;
    opacity: 0.8;
`;
export const ContactRightSideContainer = styled.div`
    width: 50%;
    flex: 50%;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -4rem;
    position: relative;
    @media (max-width: 920px) {
        width: 100%;
        flex: 100%;
        margin-top: 0;
    }
`;
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const ContactLabelInputContainer = styled(LabelinputContainer)`
    padding: 1% 0;
    width: 60%;
    @media (max-width: 920px) {
        width: 80%;
    }
`;

export const ContactTextarea = styled.textarea`
    height: 55px;
    padding: 0 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid rgb(35, 35, 35);
`;
export const ContactButton = styled(Button)`
    align-self: flex-start;
`;
interface IContactMessage {
    color: string;
}
export const ContactMessage = styled(Message)<IContactMessage>`
    background-color: ${({ color }) => color};
`;
