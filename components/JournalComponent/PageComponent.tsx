import React from "react";
import {
    PageContainer,
    InfoContainerJournal,
    WrritenByJournal,
    WrritenAtJournal,
    Page,
    TextAreaContainer,
} from "./JournalComponents";

const PageComponent = ({
    date,
    content,
    onChange,
    index,
}: {
    date: Date;
    content: string;
    index: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, index: number, date: Date) => void;
}) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;

        onChange(e, index, date);
    };
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const; //ts throws some type error
    return (
        <PageContainer>
            <InfoContainerJournal>
                <WrritenByJournal>Narcis&apos;s diary</WrritenByJournal>
                <WrritenAtJournal>{date.toLocaleDateString("en-US", options)}</WrritenAtJournal>
            </InfoContainerJournal>
            <TextAreaContainer>
                <Page value={content} onChange={handleOnChange}></Page>
            </TextAreaContainer>
        </PageContainer>
    );
};
export default PageComponent;
