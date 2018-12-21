import React from 'react';
import { connect } from 'dva';
import { Route, Redirect } from 'dva/router';

import Cookies from 'js-cookie';

const AuthorizedRoute = (props: any) => {
	const { component: Component, ...rest } = props;
	const token = Cookies.get('token');
	return (
		<Route {...rest} render={(props) => token ? <Component {...props} /> : <Redirect to="/admin/login" />} />
	);
};

export default connect()(AuthorizedRoute);
