import { render } from "@testing-library/react";
import Home from "./page";

jest.mock("../components/search/Search", () => () => <div>Search Component</div>);
jest.mock("../components/search/SearchResultComponent", () => () => (
	<div>SearchResult Component</div>
));

describe("Home", () => {
	it("renders all the required components", () => {
		const { container } = render(<Home />);

		expect(container.textContent).toContain("Search Component");
		expect(container.textContent).toContain("SearchResult Component");
	});

	it("matches the snapshot", () => {
		const { container } = render(<Home />);

		expect(container).toMatchSnapshot();
	});
});
