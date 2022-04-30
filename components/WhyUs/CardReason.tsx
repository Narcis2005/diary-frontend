import { CardContainer, TitleContainer, CardTitle, ContentContainer, CardContent } from "./CardComponents";

const CardReason = ({title, content, isOdd}: {title: string, content: string, isOdd: boolean}) => {
    return (
        <>
            <CardContainer isOdd={isOdd}>
                <TitleContainer>
                    <CardTitle>{title}</CardTitle>
                </TitleContainer>
                <ContentContainer>
                    <CardContent>{content}</CardContent>
                </ContentContainer>
            </CardContainer>
        </>
    );
};
export default CardReason;