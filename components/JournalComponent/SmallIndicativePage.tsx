import {
    SmallIndicativePageBackground,
    SmallIndicativePageContainer,
    SmallIndicativePageNumber,
} from "./JournalComponents";

const SmallIndicativePage = ({ pageNumber }: { pageNumber: number }) => {
    return (
        <>
            <SmallIndicativePageContainer>
                <SmallIndicativePageBackground type="radio"></SmallIndicativePageBackground>
                <SmallIndicativePageNumber>{pageNumber}</SmallIndicativePageNumber>
            </SmallIndicativePageContainer>
        </>
    );
};

export default SmallIndicativePage;
