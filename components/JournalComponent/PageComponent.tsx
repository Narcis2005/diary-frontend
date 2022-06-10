import { PageContainer, InfoContainerJournal, WrritenByJournal, WrritenAtJournal, Page } from "./JournalComponents";

const PageComponent = ({ date, content }: { date: Date; content: string }) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const; //ts throws some type error
    return (
        <PageContainer>
            <InfoContainerJournal>
                <WrritenByJournal>Narcis&apos;s diary</WrritenByJournal>
                <WrritenAtJournal>{date.toLocaleDateString("en-US", options)}</WrritenAtJournal>
            </InfoContainerJournal>
            <Page value={content}></Page>
        </PageContainer>
    );
};
export default PageComponent;
