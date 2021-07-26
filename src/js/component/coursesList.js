import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const CoursesList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadCourses();
	}, []);
	return (
		<ul className="list-group">
			<li className="list-group-item">
				<strong>Courses</strong>
			</li>
			{store.person.courses && store.person.courses.length != 0 ? (
				store.person.courses.map((course, i) => (
					<li className="list-group-item d-flex justify-content-between" key={i}>
						<p>{course.name}</p>
						<button className="btn btn-danger" onClick={() => actions.person.deleteCourse(course.id)}>
							X
						</button>
					</li>
				))
			) : (
				<li className="list-group-item">No hay cursos</li>
			)}
			<li className="list-group-item d-flex justify-content-between p-2">
				<select className="custom-select" value={store.selectedCourse} onChange={actions.setSelectedCourse}>
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
