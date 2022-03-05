import './scss/style.scss';
import { App } from '@jlbelanger/crudnick';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

ReactDOM.render(
	<React.StrictMode>
		<App
			nav={[
				{ label: 'Users', path: '/users' },
			]}
		>
			<Routes />
		</App>
	</React.StrictMode>,
	document.getElementById('root')
);
