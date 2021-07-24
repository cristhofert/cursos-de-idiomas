import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Levels = () => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	useEffect(() => {
		actions.loadLevels();
	}, []);
	return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Name</th>
					</tr>
				</thead>
				<tbody>
					{store.levels.map(level => {
						console.table(level);
						return (
							<tr key={level.id}>
								<th scope="row">{level.id}</th>
								<td>{level.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
