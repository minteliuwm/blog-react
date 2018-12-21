import React, { Dispatch, ChangeEvent } from 'react';
import { connect } from 'dva';

import { Input, Button, message, Table } from 'antd';
import styles from './label.scss';

interface IProps {
	dispatch: Dispatch<{}>;
}

const initialState = {
	label: '',
	labelList: []
};

type State = Readonly<typeof initialState>;

class Label extends React.Component<IProps, {}, State> {
	readonly state: State = initialState;

	columns = [{
		title: '类别',
		dataIndex: 'name',
		key: 'name'
	}, {
		title: '文章数',
		dataIndex: 'articleCount',
		key: 'articleCount'
	}, {
		title: '操作',
		key: 'options',
		render: (text: string, record: any) => {
			return (
				<span className="g-text-link" onClick={this.deleteLable.bind(this, record)}>删除</span>
			);
		}
	}];

	componentDidMount() {
		this.props.dispatch({
			type: 'commons/changeBreadcrumb',
			payload: {
				breadcrumb: {
					name: '分类管理',
					canBack: false
				}
			}
		});
	}

	render() {
		return (
			<div className={styles.label}>
				<div className={styles.labelHeader}>
					<Input className={styles.labelHeaderInput} value={this.state.label} onChange={this.handleChangeLabel.bind(this)} />
					<Button type="primary" onClick={this.addLabel.bind(this)}>添加分类</Button>
				</div>
				<Table columns={this.columns} locale={{ emptyText: '暂无标签' }} />
			</div>
		);
	}

	private handleChangeLabel(e: ChangeEvent<HTMLInputElement>) {
		this.setState({
			label: e.target.value
		});
	}

	private deleteLable(record: any) {
		console.log(record);
	}

	private addLabel() {
		if (this.validate()) {
			console.log(this.state.label);
		}
	}

	private validate() {
		if (!this.state.label) {
			message.warning('标签不能为空');
			return false;
		}
		return true;
	}
}

export default connect()(Label);
