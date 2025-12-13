import { IndexTable } from '@jlbelanger/crudnick';
import React from 'react';

export default function Index() {
	let url = 'people?sort=-num_appearances';
	url += '&fields[people]=name,slug,birthdate,deathdate,is_current,num_appearances,appearances_date,filename,date_added';
	return (
		<IndexTable
			columns={[
				{
					key: 'filename',
					label: 'Image',
					disableSearch: true,
					disableSort: true,
					size: 1,
					fn: (_row, value) => {
						if (!value) {
							return (
								<div className="image-placeholder" />
							);
						}
						return (
							<img
								alt=""
								height={50}
								loading="lazy"
								src={`${import.meta.env.VITE_FRONTEND_URL}${value}`}
								width={50}
							/>
						);
					},
				},
				{
					key: 'name',
					label: 'Name',
					link: true,
					sortKey: 'slug',
				},
				{
					key: 'birthdate',
					label: 'Birthdate',
					size: 12,
				},
				{
					key: 'deathdate',
					label: 'Deathdate',
					size: 12,
				},
				{
					key: 'is_current',
					label: 'Current?',
					type: 'checkbox',
				},
				{
					key: 'num_appearances',
					label: 'Appearances',
					size: 12,
					fn: (_row, value) => (value ? value.toLocaleString() : ''),
				},
				{
					key: 'appearances_date',
					label: 'Appearances date',
					size: 12,
				},
				{
					key: 'date_added',
					label: 'Date added',
					size: 20,
				},
			]}
			defaultOptions={{
				sortKey: 'num_appearances',
				sortDir: 'desc',
			}}
			path="people"
			title="People"
			url={url}
		/>
	);
}
