import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	return (
		<div className="container">
			<div className="row d-flex">
				<Link className="btn btn-outline-primary" to="/people/add">
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
						<th scope="col">Actions</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{store.people.map(person => {
						console.table(person);
						return (
							<tr key={person.id}>
								<th scope="row">{person.id}</th>
								<td>{person.first_name}</td>
								<td>{person.last_name}</td>
								<td>{person.email}</td>
								<td>
									<Link to={`/people/${person.id}/edit`} className="btn btn-warning">
										Editar
									</Link>
								</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => {
											actions.people.delete(person.id);
										}}>
										Borrar
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
