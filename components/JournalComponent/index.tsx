import { useCallback, useEffect, useState } from "react";
import { IndicativePageForm, JournalContainer, PagesContainer, SidebarContainer } from "./JournalComponents";
import PageComponent from "./PageComponent";
import SmallIndicativePage from "./SmallIndicativePage";

interface IJournalComponent {
    content: string;
    date: Date;
}
const JournalComponent = ({ data }: { data: IJournalComponent[] }) => {
    const formatStringsInSubstringsWithNWords = (string: string, n: number): string[] => {
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
    const formatedContent = data.map((content) => {
        return { content: formatStringsInSubstringsWithNWords(content.content, 25), date: content.date };
    });
    let pageNumber = 1;
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') { 
            console.log(window.scrollY > lastScrollY);
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false); 
          } else { // if scroll up show the navbar
            setShow(true);  
          }
    
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      }, [lastScrollY]);
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [controlNavbar]);
    return (
        <>
            <JournalContainer>
                <SidebarContainer show={show}>
                    <IndicativePageForm>
                        {formatedContent.map((data) => {
                            return data.content.map((content, index) => (
                                <SmallIndicativePage pageNumber={pageNumber++} key={index} />
                            ));
                        })}
                    </IndicativePageForm>
                </SidebarContainer>
                <PagesContainer>
                    {formatedContent.map((data) => {
                        return data.content.map((content, index) => (
                            <PageComponent key={index} content={content} date={data.date} />
                        ));
                    })}
                </PagesContainer>
            </JournalContainer>
        </>
    );
};

export default JournalComponent;
