import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useAppSelector } from "../redux/hooks";

function withoutAuth<T>(Component: React.ComponentType<any>) {
    const Auth = (props: T) => {
        const router = useRouter();
        const user = useAppSelector((state) => state.user);
        useEffect(() => {
            if (user.status === "success") {
                void router.push("/profile");
            }
        }, [user, router]);

        if (user.status === "failed") {
            return <Component {...props} />;
        }
        return <Loader />;
    };
    return Auth;
}

export default withoutAuth;
