import './scss/style.scss';
import { App } from '@jlbelanger/crudnick';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './js/Routes';

ReactDOM.render(
	<React.StrictMode>
		<App
			nav={[
				{ label: 'People', path: '/people' },
				{ label: 'Users', path: '/users' },
			]}
		>
			<Routes />
		</App>
	</React.StrictMode>,
	document.getElementById('root')
);
