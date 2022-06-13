import React, { useCallback, useEffect, useState } from "react";
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
const JournalComponent = ({ data }: { data: IJournalComponent[] }) => {
    interface IPageContent {
        content: string;
        id: number;
    }
    const formatStringsInSubstringsWithNWords = (string: string, n: number): IPageContent[] => {
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
    const formatedContent = data.map((content) => {
        return { content: formatStringsInSubstringsWithNWords(content.content, 130), date: content.date };
    });
    let pageNumber = 1;
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = useCallback(() => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setShow(false);
            } else {
                // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [controlNavbar]);

    interface IDateByDate {
        date: Date;
        content: IPageContent[];
    }
    const [dataByDate, setDataByDate] = useState<IDateByDate[]>(formatedContent);
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number, date: Date) => {
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
        console.log(dataToSend);
    };
    return (
        <>
            <JournalContainer>
                <SidebarContainer show={show}>
                    <IndicativePageForm>
                        {dataByDate.map((data) => {
                            return data.content.map((content, index) => (
                                <SmallIndicativePage pageNumber={pageNumber++} key={index} />
                            ));
                        })}
                    </IndicativePageForm>
                </SidebarContainer>
                <PagesContainer>
                    {dataByDate.map((data) => {
                        return data.content.map((content, index) => (
                            <PageComponent
                                key={index}
                                onChange={onChange}
                                index={index + 1}
                                content={content.content}
                                date={data.date}
                            />
                        ));
                    })}
                    <SavebuttonContainer>
                        <SaveButton onClick={handleSave}>Save Journal</SaveButton>
                    </SavebuttonContainer>
                </PagesContainer>
            </JournalContainer>
        </>
    );
};

export default JournalComponent;
