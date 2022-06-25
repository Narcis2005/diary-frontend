import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useAppSelector } from "../../redux/hooks";

const DefaultContainer = ({ children }: { children: React.ReactNode }) => {
    const user = useAppSelector((state) => state.user);

    return (
        <>
            {user.status === "success" && <Navbar profileImageURL="/profilePlaceholder.png" />}
            {user.status === "failed" && <Navbar />}
            {children}
            <Footer />
        </>
    );
};
export default DefaultContainer;
