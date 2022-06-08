import { Label, Input, Button } from "../FormComponents";
import { ContactContainer, ContactLeftSideContainer, ContactTitle, ContactText, ContactRightSideContainer, ContactForm, ContactLabelInputContainer, ContactTextarea } from "./ContactComponents";

const ContactComponent = () => {
    return (
        <>
        <ContactContainer>
            <ContactLeftSideContainer>
                <ContactTitle>Contact</ContactTitle>
                <ContactText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium unde fugiat eligendi tempora, numquam nisi.</ContactText>
            </ContactLeftSideContainer>
            <ContactRightSideContainer>
                <ContactForm>
                <ContactLabelInputContainer>
                <Label htmlFor="fullname">Full Name</Label>
                <Input name="fullname" type="text" placeholder="John Doe"/>
            </ContactLabelInputContainer>
            <ContactLabelInputContainer>
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" placeholder="john@example.com"/>
            </ContactLabelInputContainer>
            <ContactLabelInputContainer>
                <Label htmlFor="subject">Subject</Label>
                <Input name="subject" type="text" placeholder="I found a bug"/>
            </ContactLabelInputContainer>
            <ContactLabelInputContainer>
                <Label htmlFor="message">Message</Label>
                <ContactTextarea name="message"  placeholder="Your message..."></ContactTextarea>
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