import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Courses = () => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	useEffect(() => {
		actions.loadCourses();
	}, []);
	return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Name</th>
						<th scope="col">Language</th>
						<th scope="col">Level</th>
						<th scope="col">Created at</th>
						<th scope="col">Updated at</th>
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
								<td>{course.created_at}</td>
								<td>
									{course.updated_at ? (
										course.updated_at
									) : (
										<p className="text-secondary">not updated yet</p>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
