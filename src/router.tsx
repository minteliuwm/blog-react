import * as React from 'react';
import { routerRedux, Route } from 'dva/router';
import App from './pages/app';
import H from 'history';

const { ConnectedRouter } = routerRedux;

const RouterConfig = ({ history }: { history: H.History }) => {
	return (
		<ConnectedRouter history={history}>
			<Route path="/" component={App} />
		</ConnectedRouter>
	);
}

export default RouterConfig;
