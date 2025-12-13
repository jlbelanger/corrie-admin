import { ForgotPassword, Login, NotFound, PrivateRoute, ResetPassword } from '@jlbelanger/crudnick';
import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import PersonAdd from './Pages/People/Add';
import PersonEdit from './Pages/People/Edit';
import PersonIndex from './Pages/People/Index';
import RelationshipAdd from './Pages/Relationships/Add';
import RelationshipEdit from './Pages/Relationships/Edit';
import RelationshipIndex from './Pages/Relationships/Index';
import UserAdd from './Pages/Users/Add';
import UserEdit from './Pages/Users/Edit';
import UserIndex from './Pages/Users/Index';

export default createBrowserRouter(
	[
		{
			path: '/',
			Component: Layout,
			children: [
				{
					index: true,
					Component: Login,
				},
				{
					path: 'forgot-password',
					Component: ForgotPassword,
				},
				{
					path: 'reset-password/:token',
					Component: ResetPassword,
				},
				{
					path: '',
					Component: PrivateRoute,
					children: [
						{
							path: 'people',
							children: [
								{ index: true, Component: PersonIndex },
								{ path: 'add', Component: PersonAdd },
								{ path: ':id', Component: PersonEdit },
							],
						},
						{
							path: 'relationships',
							children: [
								{ index: true, Component: RelationshipIndex },
								{ path: 'add', Component: RelationshipAdd },
								{ path: ':id', Component: RelationshipEdit },
							],
						},
						{
							path: 'users',
							children: [
								{ index: true, Component: UserIndex },
								{ path: 'add', Component: UserAdd },
								{ path: ':id', Component: UserEdit },
							],
						},
					],
				},
				{
					path: '*',
					Component: NotFound,
				},
			],
		},
	],
	{
		basename: import.meta.env.VITE_BASE_PATH,
	}
);
