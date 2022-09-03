import { IPageContent } from "../interfaces";

const formatStringsInSubstringsWithNWords = (string: string, n: number): IPageContent[] => {
    const stringsArray = string.split(" ");
    const stringsFormated = [];
    for (let i = 0; i < stringsArray.length; i += n) {
        let string = "";
        const length = stringsArray.length - i >= n ? i + n : stringsArray.length;
        for (let j = i; j < length; j++) {
            string += stringsArray[j] + " ";
        }
        stringsFormated.push({ content: string, id: i / n + 1 });
    }
    return stringsFormated;
};

export default formatStringsInSubstringsWithNWords;
