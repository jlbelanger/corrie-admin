import { IndexTable } from '@jlbelanger/crudnick';

export default function Index() {
	return (
		<IndexTable
			columns={[
				{
					key: 'username',
					label: 'Username',
					link: true,
				},
				{
					key: 'email',
					label: 'Email',
				},
			]}
			defaultOptions={{
				sortKey: 'username',
			}}
			path="users"
			title="Users"
			url="users?sort=username&fields[users]=username,email"
		/>
	);
}
