/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRef } from "react";
import useShowHideSidebarOnScroll from "../../hooks/useShowHideSidebarOnScroll";
import { SidebarContainer, IndicativePageForm } from "./JournalComponents";
import SmallIndicativePage from "./SmallIndicativePage";

interface IDiarySidebar {
    numberOfPages: number;
    isTodayANewDay: boolean;
    currentPage: number;
    onChangePage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const DiarySidebar = ({ numberOfPages, isTodayANewDay, currentPage, onChangePage }: IDiarySidebar) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const showSidebar = useShowHideSidebarOnScroll(sidebarRef.current);
    return (
        <SidebarContainer show={showSidebar} ref={sidebarRef}>
            <IndicativePageForm>
                {/* Creates an array with the length of numberOfPages so that I can create that number of elements */}
                {[...Array(numberOfPages)].map((_, index) => (
                    <SmallIndicativePage
                        pageNumber={index + 1}
                        key={index}
                        selectedNumber={currentPage}
                        onChange={onChangePage}
                    />
                ))}
                {isTodayANewDay && (
                    <SmallIndicativePage
                        pageNumber={numberOfPages + 1}
                        selectedNumber={currentPage}
                        onChange={onChangePage}
                    />
                )}
            </IndicativePageForm>
        </SidebarContainer>
    );
};
export default DiarySidebar;
