import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect, RouteComponentProps } from 'dva/router';

import BlogHome from './pages/home/home';

const Admin = (props: RouteComponentProps) => {
	return (
		<Switch>
			<Route path={`${props.match.path}`} component={BlogHome} />
			<Redirect to={`${props.match.path}`} />
		</Switch>
	);
};

export default connect()(Admin);
