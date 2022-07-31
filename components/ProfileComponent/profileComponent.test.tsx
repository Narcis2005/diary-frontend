
import { fireEvent, render } from "@testing-library/react";
import ProfileComponent from ".";
import "@testing-library/jest-dom";
import {  store } from "../../redux/store";
import { Provider } from "react-redux";
import { initializeStore } from "../../utils/api";

describe("profile component", () => {
    beforeEach(() => {
        initializeStore(store);
    });
    test("check if the props are passed properly", () => {
        // const store = makeStore();

        const props = {
            username: "Narcis",
            email: "chirilov.narcis@yahoo.ro",
            fullName: "Chirilov Narcis",
            imageURL: "/pozaCuMine.jpg",
        };
        const { queryByTestId } = render(<Provider store={store}>
            <ProfileComponent {...props} />
       </Provider>);
        const fullName = queryByTestId("input-fullname");
        const username = queryByTestId("input-username");
        const email = queryByTestId("input-email");
        expect(fullName).toHaveValue(props.fullName);
        expect(username).toHaveValue(props.username);
        expect(email).toHaveValue(props.email);
    });
    test("if no changes are done to the inputs the button should be disabled", () => {
        // const store = makeStore();
        const props = {
            username: "Narcis",
            email: "chirilov.narcis@yahoo.ro",
            fullName: "Chirilov Narcis",
            imageURL: "/pozaCuMine.jpg",
        };
        const { queryByTestId } = render(
        <Provider store={store}>
             <ProfileComponent {...props} />
        </Provider>
       );
        const button = queryByTestId("button-profile");
        expect(button).toBeDisabled();
    });
    test("if we change the input the button will be enabled", () => {
        // const store = makeStore();
        const props = {
            username: "Narcis",
            email: "chirilov.narcis@yahoo.ro",
            fullName: "Chirilov Narcis",
            imageURL: "/pozaCuMine.jpg",
        };
        const { queryByTestId } = render(<Provider store={store}>
            <ProfileComponent {...props} />
       </Provider>);
        const button = queryByTestId("button-profile");
        const fullName = queryByTestId("input-fullname") as HTMLInputElement;
        fireEvent.change(fullName, { target: { value: "new value" } });
        expect(button).not.toBeDisabled();
    });
    //Test for file input
});
