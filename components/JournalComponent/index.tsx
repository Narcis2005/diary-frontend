import {  JournalContainer, PagesContainer, SidebarContainer } from "./JournalComponents";
import PageComponent from "./PageComponent";
import SmallIndicativePage from "./SmallIndicativePage";

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
    let pageNumber = 1;
    return (
        <>
            <JournalContainer>
            <SidebarContainer>
                <form>
            {formatedContent.map((data) => {
                    return data.content.map((content,index) => (
                            <SmallIndicativePage pageNumber={pageNumber++} key={index}/>

                        )
                    );
                })}
                </form>
                </SidebarContainer>
                <PagesContainer>
                {formatedContent.map((data) => {
                    return data.content.map((content,index) => (

                        <PageComponent key={index} content={content} date={data.date}/>
                    )
                    );
                })}
                </PagesContainer>
            </JournalContainer>
        </>
    );
};

export default JournalComponent;
