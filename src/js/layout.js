import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./views/people";
import { PeopleEdit } from "./views/people_edit";
import { PeopleCreate } from "./views/people_create";
import { Courses } from "./views/courses";
import { Languages } from "./views/languages";
import { Levels } from "./views/levels";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<People />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/people/:id/edit">
							<PeopleEdit />
						</Route>
						<Route exact path="/people/add">
							<PeopleCreate />
						</Route>
						<Route exact path="/courses">
							<Courses />
						</Route>
						<Route exact path="/languages">
							<Languages />
						</Route>
						<Route exact path="/levels">
							<Levels />
						</Route>
						<Route>
							<h1>404 Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
