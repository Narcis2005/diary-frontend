import { useState, useEffect } from "react";

const useHideOnOutsideCall = (element: HTMLDivElement | null) => {
    const [show, setShow] = useState(false);
    const setShowValue = (value: boolean) => {
        setShow(value);
    };
    useEffect(() => {
        const checkOutsideClick = (e: MouseEvent) => {
            if (element && !element.contains(e.target as Node)) {
                console.log("click");
                setShow(false);
            }
        };
        document.addEventListener("mouseup", checkOutsideClick);
        return () => {
            document.removeEventListener("mouseup", checkOutsideClick);
        };
    }, [element]);
    return { showClick: show, setShowClick: setShowValue };
};

export default useHideOnOutsideCall;
