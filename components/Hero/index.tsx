import { HeroContainer, TextContainer, HeadingContainer, HeadingMessage, ParagraphContainer, Paragraph, StartWritingButtonContainer, StartWritingButton, IllustrationContainer, IllustrationImage } from "./components";

const Hero = () => {
    return (
        <>
        <HeroContainer>
            <TextContainer>
                <HeadingContainer>
                    <HeadingMessage>
                        Your private <br /> diary
                    </HeadingMessage>
                </HeadingContainer>
                <ParagraphContainer>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum earum cupiditate quas corrupti dicta?</Paragraph>

                </ParagraphContainer>
                <StartWritingButtonContainer>
                    <StartWritingButton>Start writing</StartWritingButton>
                </StartWritingButtonContainer>
            </TextContainer>
            <IllustrationContainer>
                <IllustrationImage src="/diaryIllustration.svg" height= "500" width="500" layout="responsive"/>
            </IllustrationContainer>
        </HeroContainer>
        </>
    );
};

export default Hero;