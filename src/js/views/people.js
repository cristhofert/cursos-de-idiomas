import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	useEffect(() => {
		actions.people.load();
	}, []);
	return (
		<div className="container">
			<div className="row d-flex">
				<Link className="btn btn-outline-primary m-2" to="/people/add">
					Add Person
				</Link>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Email</th>
						<th scope="col">Created at</th>
						<th scope="col">Updated at</th>
						<th scope="col">Courses</th>
						<th scope="col">Actions</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{store.people.map(person => {
						return (
							<tr key={person.id}>
								<th scope="row">{person.id}</th>
								<td>{person.first_name}</td>
								<td>{person.last_name}</td>
								<td>{person.email}</td>
								<td>{person.created_at}</td>
								<td>
									{person.updated_at ? (
										person.updated_at
									) : (
										<p className="text-secondary">not updated yet</p>
									)}
								</td>
								<td>
									<ul>
										{person.courses.map(course => (
											<li key={course.id}>{course.name}</li>
										))}
									</ul>
								</td>
								<td>
									<Link to={`/people/${person.id}/edit`} className="btn btn-warning">
										<i className="fa fa-edit text-white" />
									</Link>
								</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => {
											actions.people.delete(person.id).then(result => actions.people.load());
										}}>
										<i className="fa fa-trash-alt" />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
