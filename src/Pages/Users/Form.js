import { Field } from '@jlbelanger/formosa';
import PropTypes from 'prop-types';
import React from 'react';

export default function Form({ formType }) {
	return (
		<div className="formosa-horizontal">
			<Field label="Username" name="username" required />
			<Field label="Email" name="email" type="email" required />
			<Field label="Password" name="password" type="password" required={formType === 'add'} />
		</div>
	);
}

Form.propTypes = {
	formType: PropTypes.string.isRequired,
};
