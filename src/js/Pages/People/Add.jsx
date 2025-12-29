import { AddForm } from '@jlbelanger/crudnick';
import Form from './Form.jsx';

export default function Add() {
	return (
		<AddForm
			apiPath="people"
			component={Form}
			encType="multipart/form-data"
			path="people"
			singular="person"
		/>
	);
}
