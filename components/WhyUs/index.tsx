import CardReason from "./CardReason";
import { CardsContainer, TextContainer, TitleWhyUs, WhyUsContainer } from "./WhyUsComponents";

const WhyUs = () => {
    const reasons = [{
        title: "First reason",
        content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef"
    },
    {
        title: "Second reason",
        content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef"
    },
    {
        title: "Third reason",
        content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef"
    },
    {
        title: "Fourth reason",
        content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef"
    },
    {
        title: "Fifth reason",
        content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef"
    },
    {
        title: "Sixth reason",
        content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef"
    },
];
    return (
        <>
            <WhyUsContainer>
                <TextContainer>
                        <TitleWhyUs>Why choose us?</TitleWhyUs>
                </TextContainer>
                <CardsContainer>
                    {reasons.map((reason, index) => (
                        <CardReason title={reason.title} content={reason.content} isOdd={index%2 == 1} key={index}/>
                    ))}
                </CardsContainer>
            </WhyUsContainer>
        </>
    );
};

export default WhyUs;