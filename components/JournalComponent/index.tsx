import fileDownload from "js-file-download";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getUserByToken } from "../../redux/slices/auth";
import api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import {
    DownloadButton,
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
    id: number;
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
    useEffect(() => {
        if(window) {
         window.scrollTo(0, 0);
        }
    }, []);
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
        id: number;
        changed: boolean;
    }
    const [dataByDate, setDataByDate] = useState<IDateByDate[]>(
        data.map((content) => {
            return {
                content: formatStringsInSubstringsWithNWords(content.content, 165),
                date: content.date,
                id: content.id,
                changed: false,
            };
        }),
    );
    const [newPageData, setNewPageData] = useState<IDateByDate>({
        date: new Date(),
        content: [{ content: "", id: 1 }],
        id: 1,
        changed: false,
    });
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number, date: Date, isNewPage: boolean) => {
        if (isNewPage) {
            setNewPageData((prevDataByDate) => {
                return {
                    ...prevDataByDate,
                    changed: true,
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
                        changed: true,
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
    interface IResult {
        message: string;
    }
    interface IData {
        status: "idle" | "loading" | "succesfull" | "failed";
        result: IResult | null;
        error: string | null;
    }
    const dispatch = useAppDispatch();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [requestData, setRequestData] = useState<IData>({ status: "idle", result: null, error: null });
    const handleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        const dataToSend = dataByDate.map((oneDataByDate) => {
            return {
                date: oneDataByDate.date,
                content: oneDataByDate.content.map((content) => content.content).join(),
                id: oneDataByDate.id,
                changed: oneDataByDate.changed,
                isNewEntry: false,
            };
        });
        const dataWithNewPage = [
            ...dataToSend,
            { ...newPageData, content: newPageData.content[0].content, isNewEntry: true },
        ];
        const filtredData = dataWithNewPage.filter((entry) => entry.changed);
        setRequestData({ status: "loading", result: null, error: null });
        api.put<IResult>("/diary/update-diary", { entries: filtredData })
            .then((res) => {
                setRequestData({ status: "succesfull", result: res.data, error: null });
                void dispatch(getUserByToken());
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setRequestData({ status: "failed", result: null, error: err });
            });
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
    interface IDiaryData {
        status: "idle" | "loading" | "succesfull" | "failed";
        result: string | null;
        error: string | null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [diaryData, setDiaryData] = useState<IDiaryData>({ status: "idle", result: null, error: null });

    const downloadDiary = () => {
        setDiaryData({ status: "loading", result: null, error: null });
        api.get("/diary/download", { responseType: "blob" })
            .then((res) => {
                fileDownload(new Blob([res.data]), "diary.pdf");
                setDiaryData({ status: "succesfull", result: null, error: null });
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setDiaryData({ status: "failed", result: null, error: err });
            });
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
                        <SaveButton disabled={requestData.status === "loading"} onClick={handleSave}>
                            {requestData.status === "loading" ? "Loading..." : "Save"}
                        </SaveButton>
                        <DownloadButton disabled={diaryData.status === "loading"} onClick={downloadDiary}>
                            {diaryData.status === "loading" ? "Loading..." : "Download"}
                        </DownloadButton>
                    </SavebuttonContainer>
                </PagesContainer>
            </JournalContainer>
        </>
    );
};

export default React.memo(JournalComponent);
