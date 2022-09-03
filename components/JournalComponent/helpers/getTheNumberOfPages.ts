import { IJournalComponent } from "../interfaces";
import formatStringsInSubstringsWithNWords from "./formatStringsInSubstringsWithNWords";

const getTheNumberOfPages = (data: IJournalComponent[], numberOfWords: number): number => {
    let length = 0;
    data.map((content) => {
        length += formatStringsInSubstringsWithNWords(content.content, numberOfWords).length;
    });
    return length;
};

export default getTheNumberOfPages;
