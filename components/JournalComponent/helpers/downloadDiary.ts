import api from "../../../utils/api";
import handleAxiosError from "../../../utils/handleAxiosError";

const downloadDiaryCall = () => {
    return api
        .get("/diary/download", { responseType: "blob" })
        .then((res) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return res.data;
        })
        .catch((error: Error) => {
            const err = handleAxiosError(error);
            //handled by axios interceptor
            if (err === "return") return;
            throw err;
        });
};

export default downloadDiaryCall;
