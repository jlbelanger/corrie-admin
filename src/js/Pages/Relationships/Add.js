import { AddForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';

export default function Add() {
	const relationshipNames = ['person_1', 'person_2'];

	return (
		<AddForm
			apiPath="relationships"
			component={Form}
			path="relationship"
			relationshipNames={relationshipNames}
			singular="relationship"
		/>
	);
}
