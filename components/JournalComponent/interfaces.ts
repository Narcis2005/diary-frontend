export interface IJournalComponent {
    content: string;
    date: Date;
    id: number;
}
export interface IPageContent {
    content: string;
    id: number;
}
export interface IDateByDate {
    date: Date;
    content: IPageContent[];
    id: number;
    changed: boolean;
}
export interface IDiaryData {
    status: "idle" | "loading" | "succesfull" | "failed";
    result: string | null;
    error: string | null;
}
export interface IHandleTabIndent {
    e: React.KeyboardEvent<HTMLTextAreaElement>;
    index: number;
    date: Date;
    isNewPage: boolean;
}
export interface IResultUpdateCall {
    message: string;
}
export interface IDataUpdateCall {
    status: "idle" | "loading" | "succesfull" | "failed";
    result: IResultUpdateCall | null;
    error: string | null;
}
