import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { useAppSelector } from "../redux/hooks";

function withAuth<T>(Component: NextComponentType<T>) {
    const Auth = (props: T) => {
        const router = useRouter();
        const user = useAppSelector((state) => state.user);
        useEffect(() => {
            if (user.status === "failed") {
                void router.push("/login");
            }
        }, [user, router]);

        if (user.status === "success") {
            return <Component {...props} />;
        }
        return <Loader />;
    };
    return Auth;
}

export default withAuth;
