/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Navbar from ".";
import {  store } from "../../redux/store";
import { initializeStore } from "../../utils/api";

describe("NavBar component", () => {
    beforeEach(() => {
        initializeStore(store);
    });
    test("if we do not pass profileImageURL param, the profile-image element should not exist", () => {
        // const store = makeStore();
        
        const { queryByTestId } = render(<Provider store={store}>
            <Navbar />
       </Provider>);
        expect(queryByTestId("profile-image")).toBeNull();
    });
    test("if profileImageURL param is passed, an image should appear", () => {
        // const store = makeStore();

        const { queryByTestId } = render(<Provider store={store}>
          <Navbar profileImageURL="/test.jpg" />
       </Provider>);

        expect(queryByTestId("profile-image")).toBeInTheDocument();
    });
});
