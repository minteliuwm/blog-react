import React, { Dispatch } from 'react';
import { connect } from 'dva';

interface IProps {
	dispatch: Dispatch<{}>;
}

class NewArticle extends React.Component<IProps, {}> {
	componentDidMount() {
		this.props.dispatch({
			type: 'commons/changeBreadcrumb',
			payload: {
				breadcrumb: {
					name: '新建文章',
					canBack: true
				}
			}
		});
	}

	render() {
		return (
			<div>新建文章</div>
		);
	}
}

export default connect()(NewArticle);
