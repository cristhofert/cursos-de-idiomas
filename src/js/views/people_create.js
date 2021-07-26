import React, { useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { CoursesList } from "../component/coursesList";

export const PeopleCreate = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	useEffect(() => {
		actions.person.reset();
	}, []);

	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						value={store.person.email}
						onChange={event => actions.person.update({ email: event.target.value })}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="first_name">First Name</label>
					<input
						type="text"
						className="form-control"
						id="first_name"
						placeholder="First Name"
						value={store.person.first_name}
						onChange={event => actions.person.update({ first_name: event.target.value })}
					/>
				</div>
				<div className="form-group">
					<label className="form-check-label" htmlFor="last_name">
						Last Name
					</label>
					<input
						type="text"
						className="form-control"
						id="last_name"
						placeholder="Last Name"
						value={store.person.last_name}
						onChange={event => actions.person.update({ last_name: event.target.value })}
					/>
				</div>
			</form>
			<CoursesList />
			<br />
			<button
				className="btn btn-primary"
				onClick={event => {
					actions.people.add().then(() => {
						history.push("/people");
					});
				}}>
				Submit
			</button>
		</div>
	);
};
