import axios, { AxiosError } from "axios";
interface IError {
    message: string;
}
const handleAxiosError = (error: Error): string => {
    if (axios.isAxiosError(error)) {
        const err = error as AxiosError<IError>;
        if (err.response?.data?.message) {
            if (err.response.data.message === "The session ended. Please reconnect") return "return";
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return err.response.data.message;
        }
    }

    if (error?.message) {
        return error.message;
    }

    return "An unkown error appeard. Please contact us!";
};
export default handleAxiosError;
