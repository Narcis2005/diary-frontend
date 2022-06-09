import { IReason } from "../../pages";
import CardReason from "./CardReason";
import { CardsContainer, TextContainer, TitleWhyUs, WhyUsContainer } from "./WhyUsComponents";

const WhyUs = ({ reasons }: { reasons: IReason[] }) => {
    return (
        <>
            <WhyUsContainer>
                <TextContainer>
                    <TitleWhyUs>Why choose us?</TitleWhyUs>
                </TextContainer>
                <CardsContainer>
                    {reasons.map((reason, index) => (
                        <CardReason title={reason.title} content={reason.content} isOdd={index % 2 == 1} key={index} />
                    ))}
                </CardsContainer>
            </WhyUsContainer>
        </>
    );
};

export default WhyUs;
