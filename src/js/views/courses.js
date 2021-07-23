import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Courses = () => {
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
						<th scope="col">Name</th>
						<th scope="col">Language</th>
						<th scope="col">Level</th>
						<th scope="col">Actions</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{store.courses.map(course => {
						console.table(course);
						return (
							<tr key={course.id}>
								<th scope="row">{course.id}</th>
								<td>{course.name}</td>
								<td>{course.language.name}</td>
								<td>{course.level.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
