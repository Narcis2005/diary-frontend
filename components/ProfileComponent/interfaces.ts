export interface IResetPasswordResult {
    message: string;
}
export interface IResetPasswordData {
    status: "idle" | "loading" | "succesfull" | "failed";
    result: IResetPasswordResult | null;
    error: string | null;
}
export interface IUserData {
    username: string;
    fullName: string;
    email: string;
    changesWereMade: boolean;
}
export interface IDiaryData {
    status: "idle" | "loading" | "succesfull" | "failed";
    result: string | null;
    error: string | null;
}
