import React, { Component, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const CoursesList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadCourses();
	}, []);
	return (
		<ul className="list-group">
			<li className="list-group-item" key={0}>
				<strong>Courses</strong>
			</li>
			{store.person.courses && store.person.courses.length != 0 ? (
				store.person.courses.map(course => (
					<li className="list-group-item d-flex justify-content-between" key={course.id}>
						<p>{course.name}</p>
						<button className="btn btn-danger" onClick={() => actions.person.deleteCourse(course.id)}>
							X
						</button>
					</li>
				))
			) : (
				<li className="list-group-item" key={1}>
					No hay cursos
				</li>
			)}
			<li className="list-group-item d-flex justify-content-between">
				<p>Agregar: </p>
				<select className="custom-select m-1" value={store.selectedCourse} onChange={actions.setSelectedCourse}>
					{store.courses.map((course, index) => (
						<option key={index} value={index}>
							{course.name}
						</option>
					))}
				</select>
				<button className="btn btn-success" onClick={() => actions.person.addCourse()}>
					Agregar
				</button>
			</li>
		</ul>
	);
};
