import { useEffect } from "react";
import useGetUser from "../hooks/useGetUser";

const CheckUser = ({ children }: { children: React.ReactNode }) => {
    const getUser = useGetUser();

    useEffect(() => {
        getUser();
    }, [getUser]);

    return <>{children}</>;
};

export default CheckUser;
