import { IndexTable } from '@jlbelanger/crudnick';
import React from 'react';

export default function Index() {
	let url = 'relationships?sort=-created_at';
	url += '&fields[relationships]=relationship,start_date,end_date,date_added';
	url += '&fields[people]=name';
	url += '&include=person_1,person_2';
	return (
		<IndexTable
			columns={[
				{
					key: 'relationships.person_1.name',
					label: 'Person 1',
					link: true,
				},
				{
					key: 'relationships.person_2.name',
					label: 'Person 2',
				},
				{
					key: 'relationship',
					label: 'Relationship',
				},
				{
					key: 'start_date',
					label: 'Start date',
				},
				{
					key: 'end_date',
					label: 'End date',
				},
				{
					key: 'date_added',
					label: 'Date added',
					size: 20,
				},
			]}
			defaultOptions={{
				sortKey: 'date_added',
				sortDir: 'desc',
				filters: {},
			}}
			path="relationships"
			title="Relationships"
			url={url}
		/>
	);
}
