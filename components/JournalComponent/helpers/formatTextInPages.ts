import { IPageContent } from "../interfaces";

const formatTextInPages = (string: string, n: number): IPageContent[] => {
    const stringsFormated = [];
    const length = string.length;
    let index = 1;
    for (let i = 0; i < length; i += n) {
        stringsFormated.push({ content: string.substring(i, i + n), id: index++ });
    }

    return stringsFormated;
};

export default formatTextInPages;
