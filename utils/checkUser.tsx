import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getUserByToken } from "../redux/slices/auth";

const CheckUser = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(getUserByToken());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};

export default CheckUser;
