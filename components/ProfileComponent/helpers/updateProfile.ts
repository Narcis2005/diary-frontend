import api from "../../../utils/api";
import handleAxiosError from "../../../utils/handleAxiosError";

interface IUpdateProfile {
    username: string;
    email: string;
    fullName: string;
    imageName?: string;
}
const updateProfile = async ({ username, email, fullName, imageName }: IUpdateProfile) => {
    try {
        await api.put("/auth/update", {
            username: username,
            email: email,
            fullName: fullName,
            // if imageName exists add it. If it doesn't, don't add it
            ...(imageName && { imageName: imageName }),
        });
    } catch (error) {
        const newError = error as Error;
        const err = handleAxiosError(newError);
        if (err === "return") return;
        throw err;
    }
};

export default updateProfile;
