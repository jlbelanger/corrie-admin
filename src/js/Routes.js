import PersonAdd from './Pages/People/Add';
import PersonEdit from './Pages/People/Edit';
import PersonIndex from './Pages/People/Index';
import React from 'react';
import RelationshipAdd from './Pages/Relationships/Add';
import RelationshipEdit from './Pages/Relationships/Edit';
import RelationshipIndex from './Pages/Relationships/Index';
import { Route } from 'react-router-dom';
import UserAdd from './Pages/Users/Add';
import UserEdit from './Pages/Users/Edit';
import UserIndex from './Pages/Users/Index';

export default function Routes() {
	return (
		<>
			<Route exact path="/people" component={PersonIndex} />
			<Route exact path="/people/add" component={PersonAdd} />
			<Route exact path="/people/:id(\d+)" component={PersonEdit} />

			<Route exact path="/relationships" component={RelationshipIndex} />
			<Route exact path="/relationships/add" component={RelationshipAdd} />
			<Route exact path="/relationships/:id(\d+)" component={RelationshipEdit} />

			<Route exact path="/users" component={UserIndex} />
			<Route exact path="/users/add" component={UserAdd} />
			<Route exact path="/users/:id(\d+)" component={UserEdit} />
		</>
	);
}
