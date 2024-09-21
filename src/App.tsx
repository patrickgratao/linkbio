import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AppRoutes from "./Routes";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<AppRoutes />
			</Router>
		</ThemeProvider>
	);
};
