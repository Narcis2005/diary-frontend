import styled from "styled-components";
import { LabelinputContainer } from "../FormComponents";

export const ProfileContainer = styled.div`
    display: flex;
    padding: 4rem 10%;
    /* gap: 5%; */
    justify-content: center;
    background: rgb(245, 245, 245);
    @media (max-width: 920px) {
        flex-direction: column;
    }
`;
export const ProfileLeftSide = styled.div`
    display: flex;
    flex-direction: column;

    width: 30%;
    @media (max-width: 920px) {
        width: 100%;
        padding-bottom: 5%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;
export const ImageContainerProfile = styled.div`
    width: 80%;
    /* height: 18rem; */
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: 920px) {
        width: 40%;
    }
`;
export const ProfileRightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    border-left: 1px solid rgb(200, 200, 200);
    padding-left: 5%;
    @media (max-width: 920px) {
        flex-direction: column;
        border-top: 1px solid rgb(200, 200, 200);
        border-left: none;
        padding-left: 0;
        width: 100%;
        padding-top: 5%;
    }
`;
export const ProfileSection = styled.div`
    width: 100%;
`;
export const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 920px) {
        width: 100%;
    }
`;
export const FormGroup = styled.div`
    display: flex;
    /* width: 100%; */
    gap: 5%;
    @media (max-width: 920px) {
        flex-direction: column;
    }
`;
export const LabelinputContainerProfile = styled(LabelinputContainer)`
    width: 100%;
`;

export const FileUpload = styled.div`
    width: 100%;
`;
export const FileSelectButton = styled.div`
    margin: 0;
    padding: 0;
    padding: 10px;
    display: inline-block;
    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 2px solid rgb(35, 35, 35);
`;
export const FileUploadSelect = styled.div`
    display: block;
    color: black;
    cursor: pointer;
    text-align: left;
    background: white;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    border: 1px solid rgb(35, 35, 35);
    &:hover ${FileSelectButton} {
        background: rgb(230, 230, 230);
    }
    margin: 0;
    padding: 0;
`;

export const FileSelectName = styled.div`
    display: inline-block;
    padding: 10px;
`;
export const FileUploadInput = styled.input`
    display: none;
`;
export const ProfileSectionTitle = styled.h2`
    font-size: 2rem;
`;

export const ProfileLinksContainer = styled.ul`
    margin-top: 15px;
    margin-left: 10px;
    width: 80%;
    @media (max-width: 920px) {
        width: 50%;
        margin-top: 0;
    }
`;

export const ProfileLinkItem = styled.li`
    list-style: none;
    font-size: 18px;
    margin: 10px 0;
    color: black;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    & > * {
        display: block;
    }
    @media (max-width: 920px) {
        font-size: 20px;
        margin: 15px 0;
    }
    @media (max-width: 600px) {
        font-size: 18px;
        margin: 10px 0;
    }
`;
export const ErrorText = styled.p`
    background: red;
`;
