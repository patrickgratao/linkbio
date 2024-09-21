import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./Routes";
import { AppLayout } from "layouts/AppLayout";

import "styles/tailwindGlobal.css";

export const App = () => {
	return (
		<AppLayout>
			<Router>
				<AppRoutes />
			</Router>
		</AppLayout>
	);
};
