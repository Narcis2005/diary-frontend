import { useState, useEffect } from "react";
import useHideOnOutsideCall from "./useHideOnOutsideClick";

const useShowHideSidebarOnScroll = (element: HTMLDivElement | null) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const { showClick, setShowClick } = useHideOnOutsideCall(element);
    useEffect(() => {
        const controlSidebar = () => {
            if (typeof window !== "undefined") {
                setShowClick(window.scrollY <= lastScrollY);
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
    return showClick;
};

export default useShowHideSidebarOnScroll;
