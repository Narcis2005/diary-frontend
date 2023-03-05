import React, { useEffect, useRef } from "react";
import {
    SmallIndicativePageBackground,
    SmallIndicativePageContainer,
    SmallIndicativePageInputLabelContainer,
    SmallIndicativePageLabel,
    SmallIndicativePageNumber,
} from "./JournalComponents";

const SmallIndicativePage = ({
    pageNumber,
    selectedNumber,
    onChange,
    date,
    scrollToSidebarPage,
}: {
    pageNumber: number;
    selectedNumber: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    date: Date;
    scrollToSidebarPage: (e: HTMLDivElement) => void;
}) => {
    const handleLabelClick = (e: React.MouseEvent) => {
        const newE = e as unknown as React.ChangeEvent<HTMLInputElement>;
        newE.target.value = pageNumber.toString();
        onChange(newE);
    };
    const sidebarPageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (pageNumber === selectedNumber && sidebarPageRef.current) {
            scrollToSidebarPage(sidebarPageRef.current);
        }
    }, [pageNumber, scrollToSidebarPage, selectedNumber]);
    return (
        <>
            <SmallIndicativePageContainer ref={sidebarPageRef}>
                <SmallIndicativePageInputLabelContainer>
                    <SmallIndicativePageBackground
                        type="radio"
                        checked={pageNumber === selectedNumber}
                        value={pageNumber}
                        onChange={onChange}
                        name={"page" + pageNumber.toString()}
                    />
                    <SmallIndicativePageLabel htmlFor={"page" + pageNumber.toString()} onClick={handleLabelClick}>
                        {date.toDateString()}
                    </SmallIndicativePageLabel>
                </SmallIndicativePageInputLabelContainer>

                {/* <SmallIndicativePageDate>{date.toDateString()}</SmallIndicativePageDate> */}

                <SmallIndicativePageNumber>{pageNumber}</SmallIndicativePageNumber>
            </SmallIndicativePageContainer>
        </>
    );
};

export default SmallIndicativePage;
