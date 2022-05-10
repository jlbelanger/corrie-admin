import { Field } from '@jlbelanger/formosa';
import React from 'react';

export default function Form() {
	const toSlug = (value) => {
		if (!value) {
			return '';
		}
		return value.toLowerCase()
			.replace(/ & /g, '-and-')
			.replace(/<[^>]+>/g, '')
			.replace(/['’.]/g, '')
			.replace(/[^a-z0-9-]+/g, '-')
			.replace(/^-+/, '')
			.replace(/-+$/, '')
			.replace(/--+/g, '-');
	};

	const autopopulate = (e, row) => {
		if (!row.first_name && !row.last_name) {
			return {};
		}
		return {
			slug: toSlug(`${row.first_name || ''} ${row.last_name || ''}`),
		};
	};

	return (
		<div className="formosa-horizontal">
			<Field afterChange={autopopulate} autoFocus label="First name" maxLength={255} name="first_name" note="Use ? if unknown." required />
			<Field afterChange={autopopulate} label="Last name" maxLength={255} name="last_name" note="Use ? if unknown." required />
			<Field label="Slug" maxLength={255} name="slug" required />
			<Field accept="image/*" label="Image" imagePrefix={process.env.REACT_APP_FRONTEND_URL} imagePreview name="filename" type="file" />
			<Field label="Gender" listClassName="formosa-radio--inline" name="gender" options={{ M: 'Male', F: 'Female' }} type="radio" />
			<Field label="Birthdate" maxLength={10} name="birthdate" placeholder="YYYY-MM-DD" size={12} />
			<Field label="Deathdate" maxLength={10} name="deathdate" placeholder="YYYY-MM-DD" size={12} />
			<Field label="Current?" name="is_current" type="checkbox" />
			<Field label="# appearances" name="num_appearances" size={4} />
			<Field label="Last appearance date" maxLength={10} name="appearances_date" size={12} />
		</div>
	);
}
