import React, { Dispatch } from 'react';
import { connect } from 'dva';

import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import uuid from 'uuid';
import 'simplemde/dist/simplemde.min.css';

interface IProps {
	dispatch: Dispatch<{}>;
}

class NewArticle extends React.Component<IProps, {}> {
	editor?: SimpleMDE;

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
			<div>
				<textarea id="editor"></textarea>
			</div>
		);
	}
}

export default connect()(NewArticle);
