/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import WhyUs from ".";
import { render } from "@testing-library/react";
import { IReason } from "../../pages";
describe("WhyUs components", () => {
    let expectedProps: IReason[];
    beforeEach(() => {
        expectedProps = [
            {
                title: "Lorem Ipsum",
                content: "Quisque vel ornare erat, nec fermentum lorem. Mauris venenatis ullamcorper enim ut placerat.",
            },
            {
                title: "Praesent eu molestie massa.",
                content: "Donec tincidunt bibendum sem nec euismod. Integer vulputate vitae lectus sed eleifend.",
            },
        ];
    });
    test("Should render the title and content on screen", () => {
        const { getByText } = render(<WhyUs reasons={expectedProps} />);
        expectedProps.forEach((reasonProps: IReason) => {
            const title = getByText(reasonProps.title);
            const content = getByText(reasonProps.content);
            expect(title).toBeVisible();
            expect(content).toBeVisible();
        });
    });
    test("number of cards", () => {
        const { queryAllByTestId } = render(<WhyUs reasons={expectedProps} />);
        //The CardReason component has a data-testid set to card-container
        expect(queryAllByTestId("card-container").length+1).toBe(expectedProps.length);
    });
});
