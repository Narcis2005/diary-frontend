import React from "react";
import {
    SmallIndicativePageBackground,
    SmallIndicativePageContainer,
    SmallIndicativePageNumber,
} from "./JournalComponents";

const SmallIndicativePage = ({
    pageNumber,
    selectedNumber,
    onChange,
}: {
    pageNumber: number;
    selectedNumber: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <>
            <SmallIndicativePageContainer>
                <SmallIndicativePageBackground
                    type="radio"
                    checked={pageNumber === selectedNumber}
                    value={pageNumber}
                    onChange={onChange}
                ></SmallIndicativePageBackground>
                <SmallIndicativePageNumber>{pageNumber}</SmallIndicativePageNumber>
            </SmallIndicativePageContainer>
        </>
    );
};

export default SmallIndicativePage;
