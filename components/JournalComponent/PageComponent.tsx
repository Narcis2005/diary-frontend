import React, { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
    PageContainer,
    InfoContainerJournal,
    WrritenByJournal,
    WrritenAtJournal,
    Page,
    TextAreaContainer,
} from "./JournalComponents";
export interface IPageComponent {
    date: Date;
    content: string;
    index: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, index: number, date: Date) => void;
    currentPage: number;
    change: (nr: number) => void;
}
// eslint-disable-next-line react/display-name
const PageComponent = ({ date, content, onChange, index, currentPage, change }: IPageComponent) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;

        onChange(e, index, date);
    };
    const containerRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if (currentPage === index && inView === false) {
            containerRef.current?.scrollIntoView(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);
    useEffect(() => {
        if (inView === true) {
            change(index);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);
    const setRefs = useCallback(
        (node: HTMLDivElement) => {
            containerRef.current = node;
            ref(node);
        },
        [ref],
    );
    
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const; //ts throws some type error
    return (
        <PageContainer ref={setRefs}>
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
export default React.memo(PageComponent);
