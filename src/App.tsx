import { BrowserRouter as Router } from "react-router-dom";

import { AppLayout } from "layouts/AppLayout";
import AppRoutes from "./Routes";

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
