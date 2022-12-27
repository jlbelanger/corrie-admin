import './scss/style.scss';
import { App } from '@jlbelanger/crudnick';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './js/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App
			nav={[
				{ label: 'People', path: '/people' },
				{ label: 'Relationships', path: '/relationships' },
				{ label: 'Users', path: '/users' },
			]}
			routerAttributes={{
				basename: process.env.PUBLIC_URL,
			}}
		>
			<Routes />
		</App>
	</React.StrictMode>
);
