import { Layout as CrudnickLayout } from '@jlbelanger/crudnick';
import { Outlet } from 'react-router';

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
