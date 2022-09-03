import { IJournalComponent } from "../interfaces";

const isTodayANewDay = (lastDiaryEntry: IJournalComponent) => {
    const today = new Date();
    if (
        today.getFullYear() === lastDiaryEntry.date.getFullYear() &&
        today.getMonth() === lastDiaryEntry.date.getMonth() &&
        today.getDate() === lastDiaryEntry.date.getDate()
    ) {
        return false;
    }
    return true;
};

export default isTodayANewDay;
