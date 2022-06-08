

const JournalComponent = ({content}: {content: string}) => {
    const formatStringsInNSubstrings = (string:string):string[] => {
        const stringsArray = string.split(" ");
    const stringsFormated = [];
    for(let i = 0; i<stringsArray.length; i+=10) {
        let string = "";
        const length = (stringsArray.length - i )>= 10 ? (i+10) : ( stringsArray.length);
        console.log(length);
        for(let j = i; j<length; j++) {
            string+=stringsArray[j]+" ";
        }
        stringsFormated.push(string);
    }
    return stringsFormated;
    };
    const formatedContent = formatStringsInNSubstrings(content);
    return (
        <>
            <div>
                {formatedContent.map((string, index) => (<input type="text" key={index} value={string}/>))}
            </div>
        </>
    );
};

export default JournalComponent;