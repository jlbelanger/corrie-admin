import { Api, Field } from '@jlbelanger/formosa';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ row }) {
	const [people, setPeople] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (people === null) {
			setPeople([]);
			Api.get('people?fields[people]=name')
				.then((response) => {
					setPeople(response);
				})
				.catch((response) => {
					setError(response);
				});
		}
		return () => {};
	});

	const labelFn = (option) => (
		<a
			className="crudnick-autocomplete-link"
			href={`${process.env.PUBLIC_URL}/people/${option.id}`}
			rel="noopener noreferrer"
			target="_blank"
		>
			{option.name}
		</a>
	);

	const valueKey = (option) => (JSON.stringify({ id: option.id, type: option.type }));

	const relationships = [
		'adoptive parent',
		'common law spouse',
		'distant relative',
		'foster parent',
		'legal guardian',
		'parent',
		'spouse',
		'surrogate parent',
	];
	const endReasons = [
		'annulled',
		'current',
		'death',
		'divorce',
		'invalid',
	];
	const showTakeLastName = row && ['adoptive parent', 'common law spouse', 'spouse'].includes(row.relationship);

	return (
		<>
			{error ? (<div className="formosa-message formosa-message--error">There was an error loading the list of people.</div>) : null}
			<div className="formosa-horizontal">
				<Field
					autoFocus
					label="Person 1"
					labelFn={labelFn}
					max={1}
					name="person_1"
					options={people}
					required
					type="autocomplete"
					valueKey={valueKey}
				/>
				<Field
					label="Person 2"
					labelFn={labelFn}
					max={1}
					name="person_2"
					options={people}
					required
					type="autocomplete"
					valueKey={valueKey}
				/>
				<Field label="Relationship" name="relationship" options={relationships} required type="select" />
				<Field label="Start date" maxLength={10} name="start_date" placeholder="YYYY-MM-DD" size={12} />
				<Field label="End date" maxLength={10} name="end_date" placeholder="YYYY-MM-DD" size={12} />
				<Field label="End reason" name="end_reason" options={endReasons} type="select" />
				<Field disabled={!showTakeLastName} label="Take last name?" name="take_last_name" type="checkbox" />
			</div>
		</>
	);
}

Form.propTypes = {
	row: PropTypes.object,
};

Form.defaultProps = {
	row: null,
};
