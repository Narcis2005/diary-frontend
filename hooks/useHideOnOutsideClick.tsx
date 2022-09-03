import { useState, useEffect } from "react";

const useHideOnOutsideCall = (element: HTMLDivElement | null) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const checkOutsideClick = (e: MouseEvent) => {
            if (element && !element.contains(e.target as Node)) {
                setShow(false);
            }
        };
        document.addEventListener("mouseup", checkOutsideClick);
        return () => {
            document.removeEventListener("mouseup", checkOutsideClick);
        };
    }, [element]);
    return show;
};

export default useHideOnOutsideCall;
