import { useAppDispatch } from "../redux/hooks";
import { getUserByToken } from "../redux/slices/auth";

const useGetUser = () => {
    const dispatch = useAppDispatch();
    const getUser = () => {
        void dispatch(getUserByToken());
    };
    return getUser;
};

export default useGetUser;
