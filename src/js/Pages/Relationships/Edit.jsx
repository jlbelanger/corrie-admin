import { EditForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';
import { useParams } from 'react-router';

export default function Edit() {
	const { id } = useParams();
	const relationshipNames = ['person_1', 'person_2'];

	return (
		<EditForm
			apiPath="relationships"
			component={Form}
			name="name"
			path="relationships"
			relationshipNames={relationshipNames}
			singular="relationship"
			url={`relationships/${id}?include=${relationshipNames.join(',')}&fields[people]=name`}
		/>
	);
}
