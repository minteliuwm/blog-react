import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Blog from './blog/blog';
import Admin from './admin/admin';

const App = () => {
	return (
		<Switch>
			<Route path="/blog" component={Blog} />
			<Route path="/admin" component={Admin} />
			<Redirect to="/blog" />
		</Switch>
	);
};

export default App;
