import React from 'react';
import { Switch, Route } from 'dva/router';
import { Layout } from 'antd';

import styles from './home.scss';

class AdminHome extends React.Component {
	constructor(props: object) {
		super(props);
	}

	render() {
		return (
			<Layout className={styles.home}>
				Hello Home
			</Layout>
		);
	}
}

export default AdminHome;
