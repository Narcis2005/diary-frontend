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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IHandleTabIndent } from "./interfaces";

export interface IPageComponent {
    date: Date;
    content: string;
    index: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement> | null, index: number, date: Date, isNewPage: boolean) => void;
    currentPage: number;
    change: (nr: number) => void;
    handleTabIndent: ({ e, index, isNewPage, date }: IHandleTabIndent) => void;
    numberOfPage: number;
    isNewPage: boolean;
    placeholder?: string;
}
// eslint-disable-next-line react/display-name
const PageComponent = ({
    date,
    content,
    onChange,
    index,
    currentPage,
    change,
    numberOfPage,
    isNewPage,
    placeholder,
    handleTabIndent,
}: IPageComponent) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const pageNumberRef = useRef<HTMLDivElement>(null);
    const [initialTextAreaHeight, setInitialTextAreaHeight] = useState(0);
    const [isInitialCall, setIsInitialCall] = useState(true);
    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (newDate: Date) => {
        setStartDate(newDate);
        onChange(null, index, newDate, isNewPage);
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (isInitialCall) {
            setInitialTextAreaHeight(e.target.scrollHeight);
            setIsInitialCall(false);
        }
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;
        if (pageNumberRef.current && !isInitialCall) {
            pageNumberRef.current.style.marginTop = `${e.target.scrollHeight - initialTextAreaHeight}px`;
        }
        if (isNewPage) {
            onChange(e, index, startDate, isNewPage);
        } else {
            onChange(e, index, date, isNewPage);
        }
    };
    const containerRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        if (currentPage === numberOfPage && inView === false) {
            containerRef.current?.scrollIntoView({ behavior: "smooth" });
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
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Tab") {
            const target = e.target as HTMLTextAreaElement;
            const end = target.selectionEnd;
            if (isNewPage) {
                handleTabIndent({ e, index, date: startDate, isNewPage });
            } else {
                handleTabIndent({ e, index, date, isNewPage });
            }
            if (textAreaRef.current) {
                textAreaRef.current.selectionEnd = end + 1;
            }
        }
    };
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const; //ts throws some type error
    return (
        <PageContainer ref={setRefs}>
            <InfoContainerJournal>
                <WrritenByJournal>Narcis&apos;s diary</WrritenByJournal>
                {!isNewPage && <WrritenAtJournal>{date.toLocaleDateString("en-US", options)}</WrritenAtJournal>}
                {isNewPage && (
                    <div>
                        <DatePicker selected={startDate} onChange={handleDateChange} />
                    </div>
                )}
            </InfoContainerJournal>
            <TextAreaContainer>
                <Page
                    ref={textAreaRef}
                    value={content}
                    onKeyDown={handleKeyPress}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                ></Page>
            </TextAreaContainer>
            <PageNumberContainer ref={pageNumberRef}>
                <PageNumber>{numberOfPage}</PageNumber>
            </PageNumberContainer>
        </PageContainer>
    );
};
export default React.memo(PageComponent);
