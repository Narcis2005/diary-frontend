import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const DefaultContainer = ({children}:{children: React.ReactNode}) => {
    return(
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};
export default DefaultContainer;