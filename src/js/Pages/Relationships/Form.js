import { Alert, Api, Field } from '@jlbelanger/formosa';
import React, { useEffect, useState } from 'react';
import { errorMessageText } from '@jlbelanger/crudnick';
import PropTypes from 'prop-types';

export default function Form({ row }) {
	const [people, setPeople] = useState([]);
	const [peopleError, setPeopleError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const api = Api.instance();

	useEffect(() => {
		api('people?fields[people]=name', false)
			.catch((response) => {
				setPeopleError(errorMessageText(response));
				setIsLoading(false);
			})
			.then((response) => {
				if (!response) {
					return;
				}
				setPeople(response);
				setIsLoading(false);
			});
	}, []);

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

	const valueKey = (option) => ({ id: option.id, type: option.type });

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
		'unknown',
	];
	const showTakeLastName = row && ['adoptive parent', 'common law spouse', 'spouse'].includes(row.relationship);

	return (
		<>
			{peopleError && (<Alert type="error">There was an error loading the list of people.</Alert>)}
			<div className="formosa-horizontal">
				<Field autoFocus label="Relationship" name="relationship" options={relationships} required type="select" />
				<Field
					afterAdd={() => {
						const elem = document.querySelector('[id="person_2"]');
						if (elem) {
							elem.focus();
						} else {
							document.querySelector('[id="start_date"]').focus();
						}
					}}
					label="Person 1"
					labelFn={labelFn}
					max={1}
					name="person_1"
					options={people}
					required
					showLoading={isLoading}
					type="autocomplete"
					valueKey={valueKey}
				/>
				<Field
					afterAdd={() => {
						const elem = document.querySelector('[id="start_date"]');
						elem.focus();
					}}
					label="Person 2"
					labelFn={labelFn}
					max={1}
					name="person_2"
					options={people}
					required
					showLoading={isLoading}
					type="autocomplete"
					valueKey={valueKey}
				/>
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
