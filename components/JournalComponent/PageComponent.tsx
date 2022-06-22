import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
    PageContainer,
    InfoContainerJournal,
    WrritenByJournal,
    WrritenAtJournal,
    Page,
    TextAreaContainer,
    PageNumber,
    PageNumberContainer,
} from "./JournalComponents";
export interface IPageComponent {
    date: Date;
    content: string;
    index: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, index: number, date: Date, isNewPage: boolean) => void;
    currentPage: number;
    change: (nr: number) => void;
    numberOfPage: number;
    isNewPage: boolean;
}
// eslint-disable-next-line react/display-name
const PageComponent = ({ date, content, onChange, index, currentPage, change, numberOfPage, isNewPage }: IPageComponent) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const pageNumberRef = useRef<HTMLDivElement>(null);
    const [initialTextAreaHeight, setInitialTextAreaHeight] = useState(0);
    const [isInitialCall, setIsInitialCall] = useState(true);
    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (isInitialCall) {
            console.log("fdfdsfds");
            setInitialTextAreaHeight( e.target.scrollHeight);
            setIsInitialCall(false);
        }
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;
        // console.log(initialTextAreaHeight);
        if(pageNumberRef.current && !isInitialCall) {
         pageNumberRef.current.style.marginTop = `${e.target.scrollHeight - initialTextAreaHeight}px`;
        }
        onChange(e, index, date, isNewPage);
    };
    const containerRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if (currentPage === numberOfPage && inView === false) {
            containerRef.current?.scrollIntoView(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);
    useEffect(() => {
        if (inView === true) {
            change(numberOfPage);
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
            <PageNumberContainer ref={pageNumberRef}>
                <PageNumber >{numberOfPage}</PageNumber>
            </PageNumberContainer>
        </PageContainer>
    );
};
export default React.memo(PageComponent);
