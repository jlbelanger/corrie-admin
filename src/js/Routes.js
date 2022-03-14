import { Route, Switch } from 'react-router-dom';
import PersonAdd from './Pages/People/Add';
import PersonEdit from './Pages/People/Edit';
import PersonIndex from './Pages/People/Index';
import React from 'react';
import RelationshipAdd from './Pages/Relationships/Add';
import RelationshipEdit from './Pages/Relationships/Edit';
import RelationshipIndex from './Pages/Relationships/Index';
import UserAdd from './Pages/Users/Add';
import UserEdit from './Pages/Users/Edit';
import UserIndex from './Pages/Users/Index';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" />

			<Route exact path="/people"><PersonIndex /></Route>
			<Route exact path="/people/add"><PersonAdd /></Route>
			<Route exact path="/people/:id(\d+)"><PersonEdit /></Route>

			<Route exact path="/relationships"><RelationshipIndex /></Route>
			<Route exact path="/relationships/add"><RelationshipAdd /></Route>
			<Route exact path="/relationships/:id(\d+)"><RelationshipEdit /></Route>

			<Route exact path="/users"><UserIndex /></Route>
			<Route exact path="/users/add"><UserAdd /></Route>
			<Route exact path="/users/:id(\d+)"><UserEdit /></Route>

			<Route>Page not found.</Route>
		</Switch>
	);
}
