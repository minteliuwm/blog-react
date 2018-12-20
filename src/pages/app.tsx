import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Home from './home/home';
import Admin from './admin/admin';

const App = () => {
	return (
		<Switch>
			<Route exact path="/home" component={Home} />
			<Route path="/admin" component={Admin} />
			<Redirect to="/home" />
		</Switch>
	);
};

export default App;
