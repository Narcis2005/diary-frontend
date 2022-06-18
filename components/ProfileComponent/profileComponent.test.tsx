/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from "@testing-library/react";
import ProfileComponent from ".";
import "@testing-library/jest-dom";

describe("profile component", () => {
    test("check if the props are passed properly", () => {
        const props = {
            username: "Narcis",
            email: "chirilov.narcis@yahoo.ro",
            fullName: "Chirilov Narcis",
            imageURL: "/pozaCuMine.jpg",
        };
        const { queryByTestId } = render(<ProfileComponent {...props} />);
        const fullName = queryByTestId("input-fullname");
        const username = queryByTestId("input-username");
        const email = queryByTestId("input-email");
        expect(fullName).toHaveValue(props.fullName);
        expect(username).toHaveValue(props.username);
        expect(email).toHaveValue(props.email);
    });
    test("if no changes are done to the inputs the button should be disabled", () => {
        const props = {
            username: "Narcis",
            email: "chirilov.narcis@yahoo.ro",
            fullName: "Chirilov Narcis",
            imageURL: "/pozaCuMine.jpg",
        };
        const { queryByTestId } = render(<ProfileComponent {...props} />);
        const button = queryByTestId("button-profile");
        expect(button).toBeDisabled();
    });
    test("if we change the input the button will be enabled", () => {
        const props = {
            username: "Narcis",
            email: "chirilov.narcis@yahoo.ro",
            fullName: "Chirilov Narcis",
            imageURL: "/pozaCuMine.jpg",
        };
        const { queryByTestId } = render(<ProfileComponent {...props} />);
        const button = queryByTestId("button-profile");
        const fullName = queryByTestId("input-fullname") as HTMLInputElement;
        fireEvent.change(fullName, { target: { value: "new value" } });
        expect(button).not.toBeDisabled();
    });
    //Test for file input
});
