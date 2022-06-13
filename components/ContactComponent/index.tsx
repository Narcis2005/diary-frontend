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
} from "./ContactComponents";

const ContactComponent = ({
    onChange,
    value,
    onSubmit,
}: {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: { message: string; subject: string; email: string; fullname: string };
    onSubmit: (e: React.FormEvent) => void;
}) => {
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
                            <Label htmlFor="fullname">Full Name</Label>
                            <Input
                                name="fullname"
                                type="text"
                                placeholder="John Doe"
                                value={value.fullname}
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
                            <Button>Login</Button>
                        </ContactLabelInputContainer>
                    </ContactForm>
                </ContactRightSideContainer>
            </ContactContainer>
        </>
    );
};

export default ContactComponent;
