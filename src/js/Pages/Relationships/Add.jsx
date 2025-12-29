import { AddForm } from '@jlbelanger/crudnick';
import Form from './Form.jsx';

export default function Add() {
	const relationshipNames = ['person_1', 'person_2'];

	return (
		<AddForm
			apiPath="relationships"
			component={Form}
			path="relationships"
			relationshipNames={relationshipNames}
			singular="relationship"
		/>
	);
}
