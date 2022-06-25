import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    IndicativePageForm,
    JournalContainer,
    PagesContainer,
    SaveButton,
    SavebuttonContainer,
    SidebarContainer,
} from "./JournalComponents";
import PageComponent from "./PageComponent";
import SmallIndicativePage from "./SmallIndicativePage";

interface IJournalComponent {
    content: string;
    date: Date;
}
interface IPageContent {
    content: string;
    id: number;
}
export const formatStringsInSubstringsWithNWords = (string: string, n: number): IPageContent[] => {
    const stringsArray = string.split(" ");
    const stringsFormated = [];
    for (let i = 0; i < stringsArray.length; i += n) {
        let string = "";
        const length = stringsArray.length - i >= n ? i + n : stringsArray.length;
        for (let j = i; j < length; j++) {
            string += stringsArray[j] + " ";
        }
        stringsFormated.push({ content: string, id: i / n + 1 });
    }
    return stringsFormated;
};

const JournalComponent = ({ data }: { data: IJournalComponent[] }) => {
    const formatedContent = data.map((content) => {
        return { content: formatStringsInSubstringsWithNWords(content.content, 130), date: content.date };
    });
    let pageNumber = 1;
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const sidebarRef = useRef<HTMLDivElement>(null);
    const checkOutsideClick = useCallback((e: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
            setShow(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener("mouseup", checkOutsideClick);
    }, [checkOutsideClick]);

    //I think it's not necessary to do this, knowing that the nav is always rendered
    useEffect(() => {
        return () => {
            document.removeEventListener("mouseup", checkOutsideClick);
        };
    }, [checkOutsideClick]);

    const controlSidebar = useCallback(() => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the sidebar
                setShow(false);
            } else {
                // if scroll up show the sidebar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlSidebar);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlSidebar);
            };
        }
    }, [controlSidebar]);

    interface IDateByDate {
        date: Date;
        content: IPageContent[];
    }
    const [dataByDate, setDataByDate] = useState<IDateByDate[]>(formatedContent);
    const [newPageData, setNewPageData] = useState<IDateByDate>({
        date: new Date(),
        content: [{ content: "", id: 1 }],
    });
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number, date: Date, isNewPage: boolean) => {
        if (isNewPage) {
            setNewPageData((prevDataByDate) => {
                return {
                    ...prevDataByDate,
                    content: prevDataByDate.content.map((content) => {
                        if (content.id === index) {
                            return { ...content, content: e.target.value };
                        }
                        return content;
                    }),
                };
            });
            return;
        }
        setDataByDate((prevDataByDate) =>
            prevDataByDate.map((newData) => {
                if (date === newData.date) {
                    return {
                        ...newData,
                        content: newData.content.map((content) => {
                            if (content.id === index) {
                                return { ...content, content: e.target.value };
                            }
                            return content;
                        }),
                    };
                }
                return newData;
            }),
        );
    };
    const handleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        const dataToSend = dataByDate.map((oneDataByDate) => {
            return {
                date: oneDataByDate.date,
                content: oneDataByDate.content.map((content) => content.content).join(),
            };
        });
        console.log([...dataToSend, { ...newPageData, content: newPageData.content[0].content }]);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(Number(e.target.value));
    };
    const changePageOnScroll = (nr: number) => {
        setCurrentPage(nr);
    };
    let indexOfPage = 1;
    const isTodayANewDay = () => {
        const today = new Date();
        if (
            today.getFullYear() === data[data.length - 1].date.getFullYear() &&
            today.getMonth() === data[data.length - 1].date.getMonth() &&
            today.getDate() === data[data.length - 1].date.getDate()
        ) {
            return false;
        }
        return true;
    };
    return (
        <>
            <JournalContainer>
                <SidebarContainer show={show} ref={sidebarRef}>
                    <IndicativePageForm>
                        {dataByDate.map((data) => {
                            return data.content.map((content, index) => (
                                <SmallIndicativePage
                                    pageNumber={pageNumber++}
                                    key={index}
                                    selectedNumber={currentPage}
                                    onChange={onChangePage}
                                />
                            ));
                        })}
                        {isTodayANewDay() && (
                            <SmallIndicativePage
                                pageNumber={pageNumber++}
                                selectedNumber={currentPage}
                                onChange={onChangePage}
                            />
                        )}
                    </IndicativePageForm>
                </SidebarContainer>
                <PagesContainer>
                    {dataByDate.map((data) => {
                        return data.content.map((content, index) => (
                            <PageComponent
                                key={index}
                                onChange={onChange}
                                numberOfPage={indexOfPage++}
                                index={index + 1}
                                content={content.content}
                                date={data.date}
                                currentPage={currentPage}
                                change={changePageOnScroll}
                                isNewPage={false}
                            />
                        ));
                    })}
                    {isTodayANewDay() && (
                        <PageComponent
                            onChange={onChange}
                            numberOfPage={indexOfPage++}
                            content={newPageData.content[0].content}
                            index={1}
                            date={new Date()}
                            currentPage={currentPage}
                            change={changePageOnScroll}
                            isNewPage={true}
                            placeholder="Write what you did today in your today page!"
                        />
                    )}
                    <SavebuttonContainer>
                        <SaveButton onClick={handleSave}>Save Journal</SaveButton>
                    </SavebuttonContainer>
                </PagesContainer>
            </JournalContainer>
        </>
    );
};

export default React.memo(JournalComponent);
