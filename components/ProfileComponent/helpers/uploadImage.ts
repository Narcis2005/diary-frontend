import api from "../../../utils/api";
import handleAxiosError from "../../../utils/handleAxiosError";

const uploadImage = async (formData: FormData) => {
    try {
        const uploadData = await api.post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return uploadData.data as string;
    } catch (error) {
        const newError = error as Error;
        const err = handleAxiosError(newError);
        if (err === "return") return;
        throw err;
    }
};

export default uploadImage;
