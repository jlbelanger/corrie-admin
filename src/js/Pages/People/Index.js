import { IndexTable } from '@jlbelanger/crudnick';
import React from 'react';

export default function Index() {
	let url = 'people?sort=-num_appearances';
	url += '&fields[people]=name,slug,birthdate,deathdate,is_current,num_appearances,appearances_date,filename,created_at';
	return (
		<IndexTable
			columns={[
				{
					key: 'filename',
					label: 'Image',
					disableSearch: true,
					disableSort: true,
					fn: (_row, value) => {
						if (!value) {
							return (
								<div style={{ height: '50px', width: '50px' }} />
							);
						}
						return (
							<img
								alt=""
								height={50}
								loading="lazy"
								src={`${process.env.REACT_APP_FRONTEND_URL}${value}`}
								width={50}
							/>
						);
					},
				},
				{
					key: 'name',
					label: 'Name',
					link: true,
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
					key: 'created_at',
					label: 'Date added',
					size: 20,
				},
			]}
			defaultOptions={{
				sortKey: 'num_appearances',
				sortDir: 'desc',
				filters: {},
			}}
			path="people"
			title="People"
			url={url}
		/>
	);
}
