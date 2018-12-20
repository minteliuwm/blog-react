import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router';

import Login from './loign/login';
import Home from './home/home';

const Admin = (props: RouteComponentProps) => {
	return (
		<Switch>
			<Route exact path={`${props.match.path}/login`} component={Login} />
			<Route exact path={`${props.match.path}/home`} component={Home} />
			<Redirect to={`${props.match.path}/login`} />
		</Switch>
	);
};

export default connect()(Admin);
