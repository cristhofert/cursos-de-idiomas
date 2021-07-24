import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Languages = () => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	useEffect(() => {
		actions.loadLanguages();
	}, []);
	return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Code</th>
						<th scope="col">Name</th>
					</tr>
				</thead>
				<tbody>
					{store.languages.map(language => {
						console.table(language);
						return (
							<tr key={language.id}>
								<th scope="row">{language.code}</th>
								<td>{language.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
