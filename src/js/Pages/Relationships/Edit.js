import { EditForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
	const { id } = useParams();

	return (
		<EditForm
			apiPath="relationships"
			component={Form}
			name="name"
			path="relationships"
			singular="relationship"
			url={`relationships/${id}?include=person_1,person_2&fields[people]=name`}
		/>
	);
}
