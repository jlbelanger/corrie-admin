import { EditForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
	const { id } = useParams();

	return (
		<EditForm
			apiPath="people"
			component={Form}
			encType="multipart/form-data"
			name="name"
			path="people"
			singular="person"
			url={`people/${id}`}
		/>
	);
}
