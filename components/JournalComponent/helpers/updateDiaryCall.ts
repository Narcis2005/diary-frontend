import api from "../../../utils/api";
import handleAxiosError from "../../../utils/handleAxiosError";
import { IResultUpdateCall } from "../interfaces";

interface IUpdateDiaryCall {
    date: Date;
    content: string;
    id: number;
    isNewEntry: boolean;
}
const updateDiaryCall = (filtredData: IUpdateDiaryCall[]) => {
    return api
        .put<IResultUpdateCall>("/diary/update-diary", { entries: filtredData })
        .then((res) => {
            return res.data;
        })
        .catch((error: Error) => {
            const err = handleAxiosError(error);
            //handled by axios interceptor
            if (err === "return") return;
            throw err;
        });
};

export default updateDiaryCall;
