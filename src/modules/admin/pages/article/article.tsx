import React, { Dispatch } from 'react';
import { connect } from 'dva';
import { Button, Input, Table } from 'antd';
import { routerRedux } from 'dva/router';

import styles from './article.scss';

const Search = Input.Search;

interface IProps {
	dispatch: Dispatch<{}>;
}

const ARTICLE_COLUMNS = [{
	title: '文章标题',
	dataIndex: 'title',
	key: 'title'
}, {
	title: '发布时间',
	dataIndex: 'time',
	key: 'time'
}, {
	title: '浏览量',
	dataIndex: 'view',
	key: 'view'
}, {
	title: '分类',
	dataIndex: 'label',
	key: 'label'
}, {
	title: '文章类型',
	dataIndex: 'type',
	key: 'type'
}, {
	title: '操作',
	key: 'options'
}];

class Article extends React.Component<IProps, {}> {
	componentDidMount() {
		this.props.dispatch({
			type: 'commons/changeBreadcrumb',
			payload: {
				breadcrumb: {
					name: '文章管理',
					canBack: false
				}
			}
		});
	}

	search(v: string) {
		console.log(v);
	}

	clickToNew() {
		this.props.dispatch(routerRedux.push('/admin/article/new'));
	}

	render() {
		return (
			<div className={styles.article}>
				<div className={styles.toolbar}>
					<Button type="primary" onClick={this.clickToNew.bind(this)}>新建</Button>
					<Search
						placeholder="请输入文章名"
						onSearch={this.search}
						style={{ width: 300 }}
					/>
				</div>
				<div>
					<Table columns={ARTICLE_COLUMNS} />
				</div>
			</div>
		);
	}
}

export default connect()(Article);
