import Link from "next/link";
import {
    HeroContainer,
    TextContainer,
    HeadingContainer,
    HeadingMessage,
    ParagraphContainer,
    Paragraph,
    StartWritingButtonContainer,
    StartWritingButton,
    IllustrationContainer,
    IllustrationImage,
} from "./components";

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
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quod expedita, ipsam aliquid
                            dolore quibusdam deleniti accusamus aut ex aspernatur.
                        </Paragraph>
                    </ParagraphContainer>
                    <StartWritingButtonContainer>
                        <Link href="/journal" passHref>
                        <StartWritingButton>Dear diary...</StartWritingButton>

                        </Link>
                    </StartWritingButtonContainer>
                </TextContainer>
                <IllustrationContainer>
                    <IllustrationImage src="/diaryIllustration.svg" height="500" width="500" layout="responsive" />
                </IllustrationContainer>
            </HeroContainer>
        </>
    );
};

export default Hero;
