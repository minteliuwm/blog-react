import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect, RouteComponentProps } from 'dva/router';

import Login from './pages/loign/login';
import Home from './pages/home/home';
import AuthorizedRoute from './AuthorizedRoute';

const Admin = (props: RouteComponentProps) => {
	return (
		<Switch>
			<Route exact path={`${props.match.path}/login`} component={Login} />
			<AuthorizedRoute path={`${props.match.path}`} component={Home} />
			<Redirect to={`${props.match.path}`} />
		</Switch>
	);
};

export default connect()(Admin);
