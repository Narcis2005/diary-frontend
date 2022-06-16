import styled from "styled-components";
import { LabelinputContainer } from "../FormComponents";

export const ProfileContainer = styled.div`
    display: flex;
    padding: 4rem 10%;
    gap: 5%;
    justify-content: center;
    background: rgb(245,245,245);
    
`;
export const ProfileLeftSide = styled.div`
    display: flex;
    flex-direction: column;

    width: 30%;
`;
export const ImageContainerProfile = styled.div`
    width: 80%;
    border-radius: 20px;
    overflow: hidden;
`;
export const ProfileRightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;
export const ProfileSection = styled.div`
    width: 100%;

`;
export const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const FormGroup = styled.div`
    display: flex;
    /* width: 100%; */
    gap: 5%;
`;
export const LabelinputContainerProfile = styled(LabelinputContainer)`
    width: 100%;
    
`;

export const FileUpload = styled.div`
    width: 100%;
`;
export const FileSelectButton = styled.div`
    border: 1px solid rgb(35, 35, 35);
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
    background: rgb(230,230,230);
  }
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