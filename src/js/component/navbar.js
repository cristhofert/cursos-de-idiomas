import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Languages Courses
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/people" className="nav-link">
								People
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/courses" className="nav-link">
								Courses
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/languages" className="nav-link">
								Languages
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Levels" className="nav-link">
								Levels
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
