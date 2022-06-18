/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navbar from ".";

describe("NavBar component", () => {
    test("if we do not pass profileImageURL param, the profile-image element should not exist", () => {
        const { queryByTestId } = render(<Navbar />);
        expect(queryByTestId("profile-image")).toBeNull();
    });
    test("if profileImageURL param is passed, an image should appear", () => {
        const { queryByTestId } = render(<Navbar profileImageURL="/test.jpg" />);

        expect(queryByTestId("profile-image")).toBeInTheDocument();
    });
});
