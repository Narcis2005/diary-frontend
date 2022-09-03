import { useEffect } from "react";

const useScrollToTop = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
};

export default useScrollToTop;
