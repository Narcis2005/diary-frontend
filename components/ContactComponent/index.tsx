import { useEffect, useRef } from "react";
import { IData } from "../../pages/contact";
import { Label, Input, Button } from "../FormComponents";
import {
    ContactContainer,
    ContactLeftSideContainer,
    ContactTitle,
    ContactText,
    ContactRightSideContainer,
    ContactForm,
    ContactLabelInputContainer,
    ContactTextarea,
    ContactMessage,
} from "./ContactComponents";

const ContactComponent = ({
    onChange,
    value,
    onSubmit,
    callData,
}: {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: { message: string; subject: string; email: string; fullName: string };
    onSubmit: (e: React.FormEvent) => void;
    callData: IData;
}) => {
    const emailInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (callData.status === "failed" && callData.error === "Email is not valid" && emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, [callData]);
    return (
        <>
            <ContactContainer>
                <ContactLeftSideContainer>
                    <ContactTitle>Contact</ContactTitle>
                    <ContactText>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium unde fugiat eligendi
                        tempora, numquam nisi.
                    </ContactText>
                </ContactLeftSideContainer>
                <ContactRightSideContainer>
                    <ContactForm onSubmit={onSubmit}>
                        <ContactLabelInputContainer>
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                                name="fullName"
                                type="text"
                                placeholder="John Doe"
                                value={value.fullName}
                                onChange={onChange}
                                required
                            />
                        </ContactLabelInputContainer>
                        <ContactLabelInputContainer>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={value.email}
                                onChange={onChange}
                                required
                                ref={emailInputRef}
                            />
                        </ContactLabelInputContainer>
                        <ContactLabelInputContainer>
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                name="subject"
                                type="text"
                                placeholder="I found a bug"
                                value={value.subject}
                                onChange={onChange}
                                required
                            />
                        </ContactLabelInputContainer>
                        <ContactLabelInputContainer>
                            <Label htmlFor="message">Message</Label>
                            <ContactTextarea
                                name="message"
                                placeholder="Your message..."
                                value={value.message}
                                onChange={onChange}
                                required
                            ></ContactTextarea>
                        </ContactLabelInputContainer>
                        <ContactLabelInputContainer>
                            <Button>Send</Button>
                        </ContactLabelInputContainer>
                        <ContactLabelInputContainer>
                            {callData.status === "succesfull" && callData.result && callData.result.message && (
                                <ContactMessage color={"#2bc42b"}>{callData.result?.message}</ContactMessage>
                            )}
                            {callData.status === "failed" && callData.error && (
                                <ContactMessage color={"darkred"}>{callData.error}</ContactMessage>
                            )}
                            {callData.status === "loading" && (
                                <ContactMessage color={"gray"}>Loading...</ContactMessage>
                            )}
                        </ContactLabelInputContainer>
                    </ContactForm>
                </ContactRightSideContainer>
            </ContactContainer>
        </>
    );
};

export default ContactComponent;
