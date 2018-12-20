import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect, RouteComponentProps } from 'dva/router';

import Login from './pages/loign/login';
import Home from './pages/home/home';

const Admin = (props: RouteComponentProps) => {
	return (
		<Switch>
			<Route exact path={`${props.match.path}/login`} component={Login} />
			<Route path={`${props.match.path}`} component={Home} />
			<Redirect to={`${props.match.path}/login`} />
		</Switch>
	);
};

export default connect()(Admin);
