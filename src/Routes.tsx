import { Route, Switch } from "react-router-dom";

import { HomePage } from "pages/Home";

export default function AppRoutes() {
	return (
		<Switch>
			<Route key={0} path="/" component={HomePage} exact />
		</Switch>
	);
}
