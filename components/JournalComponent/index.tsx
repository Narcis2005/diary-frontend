import React, { useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import DiarySidebar from "./diarySidebar";
import getTheNumberOfPages from "./helpers/getTheNumberOfPages";
import isTodayANewDay from "./helpers/isTodayANewDay";
import { IJournalComponent } from "./interfaces";
import { JournalContainer } from "./JournalComponents";
import PagesContainerComponent from "./PagesContainerComponent";
export const WORDS_PER_PAGE = 165;
const JournalComponent = ({ data }: { data: IJournalComponent[] }) => {
    useScrollToTop();

    const numberOfPages = getTheNumberOfPages(data, WORDS_PER_PAGE);

    const [currentPage, setCurrentPage] = useState(1);
    const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(Number(e.target.value));
    };
    const changePageOnScroll = (nr: number) => {
        setCurrentPage(nr);
    };

    return (
        <>
            <JournalContainer>
                <DiarySidebar
                    numberOfPages={numberOfPages}
                    isTodayANewDay={isTodayANewDay(data[data.length - 1])}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
                <PagesContainerComponent
                    isTodayANewDay={isTodayANewDay(data[data.length - 1])}
                    currentPage={currentPage}
                    data={data}
                    changePageOnScroll={changePageOnScroll}
                />
            </JournalContainer>
        </>
    );
};

export default React.memo(JournalComponent);
