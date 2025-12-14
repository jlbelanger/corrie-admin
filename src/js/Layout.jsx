import { Layout as CrudnickLayout } from '@jlbelanger/crudnick';
import { Outlet } from 'react-router';
import React from 'react';

export default function MyLayout() {
	return (
		<CrudnickLayout
			nav={[
				{ label: 'People', path: '/people' },
				{ label: 'Relationships', path: '/relationships' },
				{ label: 'Users', path: '/users' },
			]}
		>
			<Outlet />
		</CrudnickLayout>
	);
}
