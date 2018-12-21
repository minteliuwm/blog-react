import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect, RouteComponentProps, Link } from 'dva/router';

import BlogList from '../list/list';
import BlogArticle from '../article/article';
import Info from './info';

import styles from './home.scss';

class Blog extends React.Component<RouteComponentProps, {}> {
	render() {
		return (
			<div className={styles.home}>
				<div className={styles.homeHeader}>
					<div className={styles.homeHeaderNav}>
						<Link className={styles.navitem} to="/">
							<i className="" />
							<span>首页</span>
						</Link>
						<Link className={styles.navitem} to="/archive">
							<i className="" />
							<span style={{ marginLeft: '12px' }}>归档</span>
						</Link>
						<Link className={styles.navitem} to="/about">
							<i className="" />
							<span style={{ marginLeft: '12px' }}>关于</span>
						</Link>
					</div>
				</div>
				<div className={styles.homeContent}>
					<div className={styles.homeContentLeft}>
						<Info />
					</div>
					<div className={styles.homeContentRight}>
						<Switch>
							<Route exact path={`${this.props.match.path}/article`} component={BlogArticle} />
							<Route exact path={`${this.props.match.path}`} component={BlogList} />
							<Redirect to={`${this.props.match.path}`} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Blog);
