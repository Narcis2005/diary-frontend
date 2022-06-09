import { JournalContainer, Page, PageContainer } from "./JournalComponents";

interface IJournalComponent {
    content: string;
    date: Date;
}
const JournalComponent = ({ data }: { data: IJournalComponent[] }) => {
    const formatStringsInSubstringsWithNWords = (string: string, n:number): string[] => {
        const stringsArray = string.split(" ");
        const stringsFormated = [];
        for (let i = 0; i < stringsArray.length; i += n) {
            let string = "";
            const length = stringsArray.length - i >= n ? i + n : stringsArray.length;
            for (let j = i; j < length; j++) {
                string += stringsArray[j] + " ";
            }
            stringsFormated.push(string);
        }
        return stringsFormated;
    };
    const formatedContent = data.map(content => {
        return{ content: formatStringsInSubstringsWithNWords(content.content, 25),
        date: content.date};
    });
    return (
        <>
            <JournalContainer>
                {formatedContent.map((data) => {
                    return data.content.map((content,index) => (
                        <PageContainer key={index}>
                          <Page value={content} > </Page>
                        </PageContainer>
                    )
                    );
                })}
            </JournalContainer>
        </>
    );
};

export default JournalComponent;
