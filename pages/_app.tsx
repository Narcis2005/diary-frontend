import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import CheckUser from "../utils/checkUser";
import { initializeStore } from "../utils/api";

function MyApp({ Component, pageProps }: AppProps) {
    initializeStore(store);
    return (
        <Provider store={store}>
            <CheckUser>
                <Component {...pageProps} />;
            </CheckUser>
        </Provider>
    );
}

export default MyApp;
