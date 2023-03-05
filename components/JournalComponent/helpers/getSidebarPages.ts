import { IJournalComponent } from "../interfaces";
import formatTextInPages from "./formatTextInPages";

export interface ISidebarPage {
    index: number;
    date: Date;
}
const getSidebarPages = (data: IJournalComponent[], numberOfWords: number): ISidebarPage[] => {
    let index = 0;
    const sidebarPages: ISidebarPage[] = [];
    data.forEach((content) => {
        formatTextInPages(content.content, numberOfWords).forEach(() => {
            sidebarPages.push({
                date: content.date,
                index: index++,
            });
        });
    });
    return sidebarPages;
};

export default getSidebarPages;
