/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import JournalComponent, { formatStringsInSubstringsWithNWords } from ".";
import "@testing-library/jest-dom";
import "intersection-observer";
describe("test index component", () => {
    test("content should appear on page", () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        window.HTMLElement.prototype.scrollIntoView = function () {};
        const data = [
            {
                date: new Date(),
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor enim eu dui pellentesque faucibus. Praesent viverra semper arcu nec viverra. Aliquam vehicula suscipit arcu, vitae ornare quam ullamcorper consequat. Maecenas id augue nec leo auctor egestas. Vivamus rhoncus neque vel orci dictum, quis dignissim velit volutpat. In ligula tortor, feugiat at aliquam a, porttitor nec erat. Praesent sit amet arcu ut tortor placerat ullamcorper. Praesent in sollicitudin purus, a egestas sem. Suspendisse ut leo turpis. Morbi scelerisque arcu ac nisi imperdiet, eu viverra leo luctus. Cras rutrum ac mauris ac euismod. Duis neque nisl, consectetur at lacus vitae, interdum tempor augue. Sed vitae semper nisl, facilisis aliquam lacus.",
            },
            {
                date: new Date("5-22-2005"),
                content:
                    "Nam in risus lorem. Curabitur faucibus nunc non sodales aliquet. Sed nisl purus, dapibus et pellentesque a, sodales ac nisl. Vivamus ac mi ligula. Vivamus in turpis non tellus vulputate tincidunt at sed eros. Cras eget augue a nisi lobortis tempor. Donec luctus nulla id enim interdum rhoncus. In vitae felis quis lectus ultrices venenatis scelerisque eget mi. Cras at ultrices ante, vel ultrices tellus. Etiam est erat, euismod non dolor vel, mattis rutrum ipsum. Nulla augue sem, condimentum posuere mauris pulvinar, vestibulum dictum turpis. Nunc tincidunt nec augue vel pharetra. Cras scelerisque nunc eu nulla vestibulum posuere. Donec tempor eget velit vitae iaculis. Pellentesque sed nunc ut tellus volutpat varius non ac nulla.",
            },
        ];
        const { getByText } = render(<JournalComponent data={data} />);
        data.forEach((newData) => {
            const content = newData.content;
            expect(getByText(content)).toBeInTheDocument();
        });
    });
    test("The function output length should be the length of the string / n, or 1", () => {
        const string =
            "Duis et euismod neque, sit amet mollis ante. Aliquam erat volutpat. Quisque hendrerit lacus vitae tempus pretium. Aenean ultricies egestas nulla, non eleifend velit eleifend et. Suspendisse aliquam bibendum aliquam. Mauris eu nunc semper lacus lacinia mattis ultricies at lorem. Sed ultrices odio nec lectus mattis, ac pretium ex luctus. Maecenas semper mollis leo vitae congue. Vivamus porttitor augue non condimentum congue. Pellentesque egestas vitae justo at consequat. Nullam et eros vestibulum, luctus velit sit amet, fringilla tellus. Quisque venenatis nisl sit amet orci rutrum sollicitudin sit amet quis mi. Phasellus non rutrum nunc, sit amet ultrices dui. Sed id orci efficitur, sodales justo non, aliquam quam. Praesent ut consectetur quam. Vestibulum porta massa nibh, eu congue dolor accumsan in.";
        const n = 12;
        expect(formatStringsInSubstringsWithNWords(string, n).length).toBe(
            string.split(" ").length / n >= 1 ? string.split(" ").length / n : 1,
        );
    });
});
