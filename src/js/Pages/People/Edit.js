import { Link, useParams } from 'react-router-dom';
import { EditForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';

export default function Edit() {
	const { id } = useParams();
	let url = `people/${id}`;
	url += '?include=relationships_as_person_1,relationships_as_person_2,relationships_as_person_1.person_2,relationships_as_person_2.person_1';

	return (
		<EditForm
			extra={(row) => {
				const parents = [];
				let children = [];
				let spouses = [];
				const other = [];

				row.relationships_as_person_1.forEach((rel) => {
					if (rel.relationship.includes('parent')) {
						children.push(rel);
					} else if (rel.relationship.includes('spouse')) {
						spouses.push(rel);
					} else {
						other.push(rel);
					}
				});

				row.relationships_as_person_2.forEach((rel) => {
					if (rel.relationship.includes('parent')) {
						parents.push(rel);
					} else if (rel.relationship.includes('spouse')) {
						spouses.push(rel);
					} else {
						other.push(rel);
					}
				});

				spouses = spouses.sort((a, b) => (a.start_date.localeCompare(b.start_date)));
				children = children.sort((a, b) => (a.person_2.birthdate.localeCompare(b.person_2.birthdate)));

				return (
					<>
						{parents.length > 0 && (
							<details open>
								<summary>
									<h2>
										Parents
										<small>{` (${parents.length})`}</small>
									</h2>
								</summary>
								<table>
									<thead>
										<tr>
											<th>Type</th>
											<th>Name</th>
											<th>Take Last Name?</th>
										</tr>
									</thead>
									<tbody>
										{parents.map((rel) => (
											<tr key={rel.id}>
												<td>{rel.relationship}</td>
												<td><Link to={`/people/${rel.person_1.id}`}>{rel.person_1.name}</Link></td>
												<td>{rel.take_last_name}</td>
											</tr>
										))}
									</tbody>
								</table>
							</details>
						)}

						{spouses.length > 0 && (
							<details open>
								<summary>
									<h2>
										Spouses
										<small>{` (${spouses.length})`}</small>
									</h2>
								</summary>
								<table>
									<thead>
										<tr>
											<th>Type</th>
											<th>Name</th>
											<th>Start Date</th>
											<th>End Date</th>
											<th>End Reason</th>
											<th>Take Last Name?</th>
										</tr>
									</thead>
									<tbody>
										{spouses.map((rel) => (
											<tr key={rel.id}>
												<td>{rel.relationship}</td>
												<td>
													{rel.person_2
														? (<Link to={`/people/${rel.person_2.id}`}>{rel.person_2.name}</Link>)
														: (<Link to={`/people/${rel.person_1.id}`}>{rel.person_1.name}</Link>)}
												</td>
												<td>{rel.start_date}</td>
												<td>{rel.end_date}</td>
												<td>{rel.end_reason}</td>
												<td>{rel.take_last_name}</td>
											</tr>
										))}
									</tbody>
								</table>
							</details>
						)}

						{children.length > 0 && (
							<details open>
								<summary>
									<h2>
										Children
										<small>{` (${children.length})`}</small>
									</h2>
								</summary>
								<table>
									<thead>
										<tr>
											<th>Type</th>
											<th>Name</th>
											<th>Birthdate</th>
											<th>Take Last Name?</th>
										</tr>
									</thead>
									<tbody>
										{children.map((rel) => (
											<tr key={rel.id}>
												<td>{rel.relationship}</td>
												<td><Link to={`/people/${rel.person_2.id}`}>{rel.person_2.name}</Link></td>
												<td>{rel.person_2.birthdate}</td>
												<td>{rel.take_last_name}</td>
											</tr>
										))}
									</tbody>
								</table>
							</details>
						)}

						{other.length > 0 && (
							<details open>
								<summary>
									<h2>
										Other
										<small>{` (${other.length})`}</small>
									</h2>
								</summary>
								<table>
									<thead>
										<tr>
											<th>Type</th>
											<th>Name</th>
											<th>Start Date</th>
											<th>End Date</th>
											<th>End Reason</th>
											<th>Take Last Name?</th>
										</tr>
									</thead>
									<tbody>
										{other.map((rel) => (
											<tr key={rel.id}>
												<td>{rel.relationship}</td>
												<td>
													{rel.person_2
														? (<Link to={`/people/${rel.person_2.id}`}>{rel.person_2.name}</Link>)
														: (<Link to={`/people/${rel.person_1.id}`}>{rel.person_1.name}</Link>)}
												</td>
												<td>{rel.start_date}</td>
												<td>{rel.end_date}</td>
												<td>{rel.end_reason}</td>
												<td>{rel.take_last_name}</td>
											</tr>
										))}
									</tbody>
								</table>
							</details>
						)}
					</>
				);
			}}
			apiPath="people"
			component={Form}
			encType="multipart/form-data"
			name="name"
			path="people"
			singular="person"
			url={url}
		/>
	);
}
