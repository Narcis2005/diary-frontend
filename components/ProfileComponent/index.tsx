import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button, Input, Label } from "../FormComponents";
import { ProfileContainer, ProfileLeftSide, ImageContainerProfile, ProfileRightSide, ProfileSection, ProfileForm, FormGroup, LabelinputContainerProfile, FileSelectButton, FileSelectName, FileUpload, FileUploadInput, FileUploadSelect, ProfileSectionTitle } from "./ProfileComponents";

const ProfileComponent = () => {
    const [imageName, setImageName] = useState("No file choosen");
    const inputRef = useRef<HTMLInputElement>(null);
    const clickInput = () => {

        inputRef.current && inputRef.current.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            setImageName(e.target.files[0].name);
        }
    };
    return (
        <>
        <ProfileContainer>
            <ProfileLeftSide>
                <ImageContainerProfile>
                    <Image src="/pozaCuMine.jpg" alt="user profile picture" width="200" height="200" layout="responsive"/>
                </ImageContainerProfile>
                
            </ProfileLeftSide>
            <ProfileRightSide>
                <ProfileSection>
                    <ProfileSectionTitle>Account details</ProfileSectionTitle>
                    <ProfileForm>
                        <FormGroup>
                            <LabelinputContainerProfile>
                                <Label>Full name</Label>
                                <Input />
                            </LabelinputContainerProfile>
                        </FormGroup>
                        <FormGroup>
                            <LabelinputContainerProfile>
                                <Label>Username</Label>
                                <Input />
                            </LabelinputContainerProfile>
                            <LabelinputContainerProfile>
                                <Label>Email</Label>
                                <Input />
                            </LabelinputContainerProfile>
                        </FormGroup>
                        <FormGroup>
                            <FileUpload>
                                <FileUploadSelect onClick={clickInput}>
                                    <FileSelectButton>Choose Photo</FileSelectButton>
                                    <FileSelectName>{imageName}</FileSelectName>
                                    <FileUploadInput ref={inputRef} onChange={handleFileChange} type="file"/>
                                </FileUploadSelect>
                            </FileUpload>
                        </FormGroup>
                            <FormGroup>
                                <Button>Save</Button>
                            </FormGroup>
                    </ProfileForm>
                </ProfileSection>
            </ProfileRightSide>
        </ProfileContainer>
        </>
    );
};

export default ProfileComponent;