import { useAppDispatch } from "../redux/hooks";
import { logoutUser } from "../redux/slices/auth";

const useLogout = () => {
    const dispatch = useAppDispatch();
    const Logout = () => {
        void dispatch(logoutUser());
    };
    return Logout;
};

export default useLogout;
