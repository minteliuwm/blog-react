import React, { SFC, Dispatch } from 'react';
import { connect } from 'dva';
import { Switch, Route, Redirect, routerRedux, RouteComponentProps } from 'dva/router';
import { Layout } from 'antd';
import { Header, Sider, Breadcrumb } from '../../components/layout';

import Dashboard from '../dashboard/dashboard';
import Article from '../article/article';
import Label from '../label/label';

import { menuConstant } from '../../constants';

import styles from './home.scss';

interface IProps extends RouteComponentProps {
	dispatch: Dispatch<{}>;
}

const AdminHome: SFC<IProps> = ({ location, match, dispatch }) => {

	const headProps = {
		location,
		user: 'admin',
		logout() {
			dispatch(routerRedux.push('/admin/login'));
		}
	};

	const siderProps = {
		location,
		menus: menuConstant
	};

	return (
		<Layout className={styles.home}>
			<Header {...headProps} />
			<Layout className={styles.middle}>
				<Sider {...siderProps} />
				<Layout className={styles.right}>
					<Breadcrumb />
					<div id="content" className={styles.content}>
						<Switch>
							<Route path={`${match.path}/dashboard`} exact component={Dashboard} />
							<Route path={`${match.path}/article`} exact component={Article} />
							<Route path={`${match.path}/label`} exact component={Label} />
							<Redirect to={`${match.path}/dashboard`} />
						</Switch>
					</div>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default connect()(AdminHome);
