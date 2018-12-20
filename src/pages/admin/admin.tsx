import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect } from 'react-router';

import Login from './loign/login';
import Home from './home/home';

const Admin = () => {
	return (
		<Switch>
			<Route exact path="/admin/login" component={Login} />
			<Route exact path="/admin/home" component={Home} />
			<Redirect to="/admin/login" />
		</Switch>
	);
};

export default connect()(Admin);
