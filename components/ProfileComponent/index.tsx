/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import { Button, Input, Label, Message } from "../FormComponents";
import fileDownload from "js-file-download";
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
import updateProfile from "./helpers/updateProfile";
import uploadImage from "./helpers/uploadImage";
import downloadDiaryCall from "../JournalComponent/helpers/downloadDiary";
import { IDiaryData, IResetPasswordData, IResetPasswordResult, IUserData } from "./interfaces";
import useLogout from "../../hooks/useLogout";
import useGetUser from "../../hooks/useGetUser";

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
    const [file, setFile] = useState<File>();

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
        if (e.target.files && e.target.files.length > 0) {
            setImageName(e.target.files[0].name);
            setFile(e.target.files[0]);
            setUserData((prevData) => ({ ...prevData, changesWereMade: true }));
        }
    };
    const Logout = useLogout();
    const getUser = useGetUser();
    const [reqData, setReqData] = useState({ status: "idle", error: "" });

    const handleProfileSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setReqData({ status: "loading", error: "" });
        try {
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                const photoName = await uploadImage(formData);
                await updateProfile({
                    username: userData.username,
                    email: userData.email,
                    fullName: userData.fullName,
                    imageName: photoName,
                });
            } else {
                await updateProfile({
                    username: userData.username,
                    email: userData.email,
                    fullName: userData.fullName,
                });
            }
            setReqData({ status: "success", error: "" });
            getUser();
        } catch (error) {
            const err = error as string;
            setReqData({ status: "failed", error: err });
        }
    };
    const [diaryData, setDiaryData] = useState<IDiaryData>({ status: "idle", result: null, error: null });
    const getDiary = () => {
        setDiaryData({ status: "loading", result: null, error: null });
        downloadDiaryCall()
            .then((res) => {
                fileDownload(new Blob([res.data]), "diary.pdf");
                setDiaryData({ status: "succesfull", result: null, error: null });
            })
            .catch((error: string) => {
                setDiaryData({ status: "failed", result: null, error: error });
            });
    };

    const [resetPasswordCall, setResetPasswordCall] = useState<IResetPasswordData>({
        status: "idle",
        result: null,
        error: null,
    });

    const handleResetPasswordClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (resetPasswordCall.status === "idle") {
            setResetPasswordCall({ status: "loading", result: null, error: null });
            api.post<IResetPasswordResult>("/auth/send-reset-password-email")
                .then((res) => {
                    setResetPasswordCall({ status: "succesfull", result: res.data, error: null });
                })
                .catch((error: Error) => {
                    const err = handleAxiosError(error);
                    //handled by axios interceptor
                    if (err === "return") return;
                    setResetPasswordCall({ status: "failed", result: null, error: err });
                });
        }
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
                            priority={true}
                        />
                    </ImageContainerProfile>
                    <ProfileLinksContainer>
                        <ProfileLinkItem>
                            <Link href="/journal">Write in diary</Link>
                        </ProfileLinkItem>
                        <ProfileLinkItem onClick={handleResetPasswordClick}>
                            <div style={{ cursor: resetPasswordCall.status === "idle" ? "pointer" : "initial" }}>
                                {resetPasswordCall.status === "loading"
                                    ? "Loading..."
                                    : resetPasswordCall.status === "succesfull"
                                    ? "An email has been sent"
                                    : resetPasswordCall.error
                                    ? resetPasswordCall.error
                                    : "Reset your password"}
                            </div>
                        </ProfileLinkItem>
                        <ProfileLinkItem>
                            <Link href="/profile/delete">Delete Account</Link>
                        </ProfileLinkItem>
                        <ProfileLinkItem onClick={Logout}>
                            <Link href="/">Logout</Link>
                        </ProfileLinkItem>
                        <ProfileLinkItem onClick={getDiary}>
                            <div style={{ cursor: "pointer" }}>
                                {diaryData.status === "loading" ? "Loading..." : "Download your diary"}
                            </div>
                        </ProfileLinkItem>
                    </ProfileLinksContainer>
                </ProfileLeftSide>
                <ProfileRightSide>
                    <ProfileSection>
                        <ProfileSectionTitle>Account details</ProfileSectionTitle>
                        <ProfileForm onSubmit={handleProfileSave}>
                            <FormGroup>
                                <LabelinputContainerProfile>
                                    <Label htmlFor="fullName">Full name</Label>
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
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        type="text"
                                        value={userData.username}
                                        name="username"
                                        onChange={handleInputChange}
                                        data-testid="input-username"
                                    />
                                </LabelinputContainerProfile>
                                <LabelinputContainerProfile>
                                    <Label htmlFor="email">Email</Label>
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
                                    <Label htmlFor="file">Image</Label>

                                    <FileUploadSelect onClick={clickInput}>
                                        <FileSelectButton>Choose Photo</FileSelectButton>
                                        <FileSelectName>{imageName}</FileSelectName>
                                        <FileUploadInput
                                            ref={inputRef}
                                            onChange={handleFileChange}
                                            name="file"
                                            type="file"
                                        />
                                    </FileUploadSelect>
                                </FileUpload>
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    disabled={!userData.changesWereMade || reqData.status === "loading"}
                                    data-testid="button-profile"
                                >
                                    {reqData.status === "loading" ? "Loading..." : "Save"}
                                </Button>
                            </FormGroup>
                            {reqData.status === "failed" && (
                                <FormGroup>
                                    <Message>{reqData.error}</Message>
                                </FormGroup>
                            )}
                        </ProfileForm>
                    </ProfileSection>
                </ProfileRightSide>
            </ProfileContainer>
        </>
    );
};

export default ProfileComponent;
