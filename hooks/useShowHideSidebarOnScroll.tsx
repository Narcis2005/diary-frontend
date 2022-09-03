import { useState, useEffect } from "react";
import useHideOnOutsideCall from "./useHideOnOutsideClick";

const useShowHideSidebarOnScroll = (element: HTMLDivElement | null) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [show, setShow] = useState(true);
    const clickShow = useHideOnOutsideCall(element);
    useEffect(() => {
        const controlSidebar = () => {
            if (typeof window !== "undefined") {
                setShow(window.scrollY <= lastScrollY);
                // remember current page location to use in the next move
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlSidebar);
            return () => {
                window.removeEventListener("scroll", controlSidebar);
            };
        }
    }, [lastScrollY]);
    useEffect(() => {
        setShow(clickShow);
    }, [clickShow]);
    return show;
};

export default useShowHideSidebarOnScroll;
