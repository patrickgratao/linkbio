import { render, screen } from "@testing-library/react";

import { HomePage } from "./pages/Home";

describe("<App />", () => {
	it("should render the App", () => {
		const { container } = render(<HomePage />);

		expect(
			screen.getByRole("heading", {
				name: /Welcome!/i,
				level: 1,
			}),
		).toBeInTheDocument();

		expect(
			screen.getByText(
				/Este boilerplate foi criado utilizando Vite, React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, Styled Components e Biome Linter./i,
			),
		).toBeInTheDocument();

		expect(
			screen.getByRole("link", {
				name: /start building for free/i,
			}),
		).toBeInTheDocument();

		expect(screen.getByRole("img")).toBeInTheDocument();

		expect(container.firstChild).toBeInTheDocument();
	});
});
