import React, { Dispatch } from 'react';
import { connect } from 'dva';

interface IProps {
	dispatch: Dispatch<{}>;
}

class Dashboard extends React.Component<IProps, {}> {
	componentDidMount() {
		this.props.dispatch({
			type: 'commons/changeBreadcrumb',
			payload: {
				breadcrumb: {
					name: '仪表盘',
					canBack: false
				}
			}
		});
	}

	render() {
		return (
			<div>仪表盘</div>
		);
	}
}

export default connect()(Dashboard);
