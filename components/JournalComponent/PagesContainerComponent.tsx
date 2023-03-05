import React from "react";
import { useState } from "react";
import ButtonsContainerComponent from "./ButtonsContainerComponent";
import formatTabInTextarea from "./helpers/formatTabInTextarea";
import formatTextInPages from "./helpers/formatTextInPages";
import { IDateByDate, IHandleTabIndent, IJournalComponent } from "./interfaces";
import { PagesContainer } from "./JournalComponents";
import PageComponent from "./PageComponent";
interface IPagesContainerComponent {
    isTodayANewDay: boolean;
    currentPage: number;
    changePageOnScroll: (nr: number) => void;
    data: IJournalComponent[];
    wordsPerPage: number;
    isScrolling: boolean;
    handleIsScrolling: (value: boolean) => void;
}
const PagesContainerComponent = ({
    isTodayANewDay,
    currentPage,
    changePageOnScroll,
    data,
    wordsPerPage,
    isScrolling,
    handleIsScrolling,
}: IPagesContainerComponent) => {
    const [dataByDate, setDataByDate] = useState<IDateByDate[]>(
        data.map((content) => {
            return {
                content: formatTextInPages(content.content, wordsPerPage),
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
    const handleTabIndent = ({ e, index, date, isNewPage }: IHandleTabIndent) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const newE = formatTabInTextarea(e);
            handlePageContentChange(newE, index, date, isNewPage);
        }
    };

    let indexOfPage = 1;

    const handlePageContentChange = (
        e: null | React.ChangeEvent<HTMLTextAreaElement>,
        index: number,
        date: Date,
        isNewPage: boolean,
    ) => {
        if (isNewPage) {
            setNewPageData((prevDataByDate) => {
                return {
                    ...prevDataByDate,
                    changed: true,
                    content: prevDataByDate.content.map((content) => {
                        if (content.id === index && e?.target) {
                            return { ...content, content: e.target.value };
                        }
                        return content;
                    }),
                    date: date,
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
                            console.log(content.id);
                            if (content.id === index && e?.target) {
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

    return (
        <PagesContainer>
            {dataByDate.map((data) => {
                return data.content.map((content, index) => (
                    <PageComponent
                        key={index}
                        onChange={handlePageContentChange}
                        numberOfPage={indexOfPage++}
                        index={index + 1}
                        content={content.content}
                        date={data.date}
                        currentPage={currentPage}
                        change={changePageOnScroll}
                        isNewPage={false}
                        handleTabIndent={handleTabIndent}
                        isScrolling={isScrolling}
                        handleIsScrolling={handleIsScrolling}
                    />
                ));
            })}
            {isTodayANewDay && (
                <PageComponent
                    handleTabIndent={handleTabIndent}
                    onChange={handlePageContentChange}
                    numberOfPage={indexOfPage++}
                    content={newPageData.content[0].content}
                    index={1}
                    date={new Date()}
                    currentPage={currentPage}
                    change={changePageOnScroll}
                    isNewPage={true}
                    placeholder="Write what you did today in your today page!"
                    isScrolling={isScrolling}
                    handleIsScrolling={handleIsScrolling}
                />
            )}
            <ButtonsContainerComponent dataByDate={dataByDate} newPageData={newPageData} />
        </PagesContainer>
    );
};

export default React.memo(PagesContainerComponent);
