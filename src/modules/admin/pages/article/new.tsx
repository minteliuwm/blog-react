import React, { Dispatch, ChangeEvent } from 'react';
import { connect } from 'dva';

import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import uuid from 'uuid';
import 'simplemde/dist/simplemde.min.css';

import { Input, Select, Button } from 'antd';
import styles from './new.scss';

const Option = Select.Option;

interface IProps {
	dispatch: Dispatch<{}>;
}

const initialState = {
	title: '',
	label: [],
	tag: [],
	type: '原创'
};

type State = Readonly<typeof initialState>;

class NewArticle extends React.Component<IProps, {}, State> {
	editor?: SimpleMDE;
	readonly state: State = initialState;

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

		this.editor = new SimpleMDE({
			element: document.getElementById('editor') || undefined,
			autofocus: true,
			autosave: {
				enabled: true,
				uniqueId: uuid.v4(),
				delay: 1000
			},
			showIcons: ['code', 'table', 'strikethrough'],
			hideIcons: ['guide'],
			status: false,
			forceSync: true,
			previewRender: (plainText = '') => {
				return marked(plainText, {
					renderer: new marked.Renderer(),
					gfm: true,
					pedantic: false,
					sanitize: false,
					tables: true,
					breaks: true,
					smartLists: true,
					smartypants: true,
					highlight: (code) => {
						return highlight.highlightAuto(code).value;
					}
				});
			}
		});
	}

	render() {
		return (
			<div className={styles.edit}>
				<div className="u-item">
					<Input placeholder="请输入文章标题" value={this.state.title} onChange={this.handleChangeTitle.bind(this)} />
				</div>
				<div>
					<textarea id="editor"></textarea>
				</div>
				<div className={styles.footer}>
					<div className="u-item">
						<div className="u-item-label">标签</div>
					</div>
					<div className="u-item">
						<div className="u-item-label">分类</div>
					</div>
					<div className="u-item">
						<div className="u-item-label">类型</div>
						<Select value={this.state.type} onChange={this.handleChangeType.bind(this)}>
							<Option value="原创">原创</Option>
							<Option value="转载">转载</Option>
							<Option value="翻译">翻译</Option>
						</Select>
					</div>
				</div>
				<Button type="primary" onClick={this.submit.bind(this)}>发布</Button>
			</div>
		);
	}

	private handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
		this.setState({
			title: e.target.value
		});
	}

	private handleChangeType(v: string) {
		this.setState({
			type: v
		});
	}

	private submit() {
		console.log(this.state);
	}
}

export default connect()(NewArticle);
