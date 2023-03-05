import React, { useEffect, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import DiarySidebar from "./diarySidebar";
import getSidebarPages from "./helpers/getSidebarPages";
import isTodayANewDay from "./helpers/isTodayANewDay";
import { IJournalComponent } from "./interfaces";
import { JournalContainer } from "./JournalComponents";
import PagesContainerComponent from "./PagesContainerComponent";
const WORDS_PER_PAGE_AT_WIDTH_1536 = 1100;
export const JournalComponent = ({ data }: { data: IJournalComponent[] }) => {
    useScrollToTop();
    const [wordsPerPage, setWordsPerPage] = useState(1000);
    const [isScrolling, setIsScrolling] = useState(false);
    const handleIsScrolling = (value: boolean) => {
        setIsScrolling(value);
    };
    useEffect(() => {
        setWordsPerPage((window.innerWidth * WORDS_PER_PAGE_AT_WIDTH_1536) / 1536 - 100);
    }, []);
    const sidebarPages = getSidebarPages(data, wordsPerPage === -1 ? WORDS_PER_PAGE_AT_WIDTH_1536 : wordsPerPage);

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
                    sidebarPages={sidebarPages}
                    isTodayANewDay={isTodayANewDay(data[data.length - 1])}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                    handleIsScrolling={handleIsScrolling}
                />
                <PagesContainerComponent
                    isTodayANewDay={isTodayANewDay(data[data.length - 1])}
                    currentPage={currentPage}
                    data={data}
                    changePageOnScroll={changePageOnScroll}
                    wordsPerPage={wordsPerPage}
                    isScrolling={isScrolling}
                    handleIsScrolling={handleIsScrolling}
                />
            </JournalContainer>
        </>
    );
};

export default React.memo(JournalComponent);
