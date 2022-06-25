import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/slices/auth";
import { Button, Input, Label } from "../FormComponents";
import {
    ProfileContainer,
    ProfileLeftSide,
    ImageContainerProfile,
    ProfileRightSide,
    ProfileSection,
    ProfileForm,
    FormGroup,
    LabelinputContainerProfile,
    FileSelectButton,
    FileSelectName,
    FileUpload,
    FileUploadInput,
    FileUploadSelect,
    ProfileSectionTitle,
    ProfileLinkItem,
    ProfileLinksContainer,
} from "./ProfileComponents";

const ProfileComponent = ({
    imageURL,
    username,
    fullName,
    email,
}: {
    imageURL: string;
    username: string;
    fullName: string;
    email: string;
}) => {
    const [imageName, setImageName] = useState("No file choosen");
    interface IUserData {
        username: string;
        fullName: string;
        email: string;
        changesWereMade: boolean;
    }
    const [userData, setUserData] = useState<IUserData>({
        username: username,
        fullName: fullName,
        email: email,
        changesWereMade: false,
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevData) => ({ ...prevData, [e.target.name]: e.target.value, changesWereMade: true }));
    };
    //The input element is display none, for styling reasons
    const inputRef = useRef<HTMLInputElement>(null);
    const clickInput = () => {
        inputRef.current && inputRef.current.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageName(e.target.files[0].name);
        }
    };
    const dispatch = useAppDispatch();
    const Logout = () => {
        void dispatch(logoutUser());
    };
    return (
        <>
            <ProfileContainer>
                <ProfileLeftSide>
                    <ImageContainerProfile>
                        <Image
                            src={imageURL}
                            alt="user profile picture"
                            width="200"
                            height="200"
                            layout="responsive"
                            objectFit="cover"
                        />
                    </ImageContainerProfile>
                    <ProfileLinksContainer>
                        <ProfileLinkItem>
                            <Link href="/profile/password-change">Change Password</Link>
                        </ProfileLinkItem>
                        <ProfileLinkItem>
                            <Link href="/profile/delete">Delete Account</Link>
                        </ProfileLinkItem>
                        <ProfileLinkItem onClick={Logout}>
                            <Link href="/">Logout</Link>
                        </ProfileLinkItem>
                    </ProfileLinksContainer>
                </ProfileLeftSide>
                <ProfileRightSide>
                    <ProfileSection>
                        <ProfileSectionTitle>Account details</ProfileSectionTitle>
                        <ProfileForm>
                            <FormGroup>
                                <LabelinputContainerProfile>
                                    <Label>Full name</Label>
                                    <Input
                                        type="text"
                                        value={userData.fullName}
                                        name="fullName"
                                        onChange={handleInputChange}
                                        data-testid="input-fullname"
                                    />
                                </LabelinputContainerProfile>
                            </FormGroup>
                            <FormGroup>
                                <LabelinputContainerProfile>
                                    <Label>Username</Label>
                                    <Input
                                        type="text"
                                        value={userData.username}
                                        name="username"
                                        onChange={handleInputChange}
                                        data-testid="input-username"
                                    />
                                </LabelinputContainerProfile>
                                <LabelinputContainerProfile>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        value={userData.email}
                                        name="email"
                                        onChange={handleInputChange}
                                        data-testid="input-email"
                                    />
                                </LabelinputContainerProfile>
                            </FormGroup>
                            <FormGroup>
                                <FileUpload>
                                    <Label>Image</Label>

                                    <FileUploadSelect onClick={clickInput}>
                                        <FileSelectButton>Choose Photo</FileSelectButton>
                                        <FileSelectName>{imageName}</FileSelectName>
                                        <FileUploadInput ref={inputRef} onChange={handleFileChange} type="file" />
                                    </FileUploadSelect>
                                </FileUpload>
                            </FormGroup>
                            <FormGroup>
                                <Button disabled={!userData.changesWereMade} data-testid="button-profile">
                                    Save
                                </Button>
                            </FormGroup>
                        </ProfileForm>
                    </ProfileSection>
                </ProfileRightSide>
            </ProfileContainer>
        </>
    );
};

export default ProfileComponent;
