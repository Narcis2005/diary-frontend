/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useRef } from "react";
import useShowHideSidebarOnScroll from "../../hooks/useShowHideSidebarOnScroll";
import { ISidebarPage } from "./helpers/getSidebarPages";
import { SidebarContainer, IndicativePageForm } from "./JournalComponents";
import SmallIndicativePage from "./SmallIndicativePage";

interface IDiarySidebar {
    sidebarPages: ISidebarPage[];
    isTodayANewDay: boolean;
    currentPage: number;
    onChangePage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleIsScrolling: (value: boolean) => void;
}
const DiarySidebar = ({
    sidebarPages,
    isTodayANewDay,
    currentPage,
    onChangePage,
    handleIsScrolling,
}: IDiarySidebar) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const showSidebar = useShowHideSidebarOnScroll(sidebarRef.current);
    const scrollToSidebarPage = (page: HTMLDivElement) => {
        if (sidebarRef.current) {
            sidebarRef.current.scroll({
                top: page.offsetTop - sidebarRef.current.offsetHeight / 2 + page.offsetHeight / 2,
                behavior: "smooth",
            });
        }
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangePage(e);
        handleIsScrolling(true);
    };
    return (
        <SidebarContainer show={showSidebar} ref={sidebarRef}>
            <IndicativePageForm>
                {/* Creates an array with the length of numberOfPages so that I can create that number of elements */}
                {sidebarPages.map((data) => (
                    <SmallIndicativePage
                        pageNumber={data.index + 1}
                        key={data.index}
                        selectedNumber={currentPage}
                        onChange={handleOnChange}
                        date={data.date}
                        scrollToSidebarPage={scrollToSidebarPage}
                    />
                ))}
                {isTodayANewDay && (
                    <SmallIndicativePage
                        pageNumber={sidebarPages.length + 1}
                        selectedNumber={currentPage}
                        onChange={handleOnChange}
                        date={new Date()}
                        scrollToSidebarPage={scrollToSidebarPage}
                    />
                )}
            </IndicativePageForm>
        </SidebarContainer>
    );
};
export default React.memo(DiarySidebar);
