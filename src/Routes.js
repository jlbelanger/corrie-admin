import { Route } from 'react-router-dom';
import UserAdd from './Pages/Users/Add';
import UserEdit from './Pages/Users/Edit';
import UserIndex from './Pages/Users/Index';

export default function Routes() {
	return (
		<>
			<Route exact path="/users" component={UserIndex} />
			<Route exact path="/users/add" component={UserAdd} />
			<Route exact path="/users/:id(\d+)" component={UserEdit} />
		</>
	);
}
