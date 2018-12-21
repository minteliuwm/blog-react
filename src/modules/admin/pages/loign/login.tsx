import React, { Dispatch } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Icon, Input, Checkbox, Button } from 'antd';

import styles from './login.scss';
import { FormComponentProps } from '_antd@3.11.2@antd/lib/form';

const FormItem = Form.Item;

const LOGIN_PWD = 'login_pwd';
const LOGIN_USER = 'login_user';
const REMEMBER_PWD = 'remember_pwd';

interface IProps extends FormComponentProps {
	dispatch: Dispatch<{}>;
}

class LoginForm extends React.Component<IProps, {}> {

	render() {
		const { getFieldDecorator } = this.props.form;
		const remember = Number(localStorage.getItem(REMEMBER_PWD)) === 1;
		return (
			<div className={styles.login}>
				<div className={styles.loginCenter}>
					<div className={styles.loginForm}>
						<Form>
							<FormItem>
								{getFieldDecorator('username', {
									initialValue: localStorage.getItem(LOGIN_USER) || '',
									rules: [{ required: true, message: '请输入您的用户名' }]
								})(
									<Input className={styles.loginInput} prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="用户名" />
								)}
							</FormItem>
							<FormItem>
								{getFieldDecorator('password', {
									initialValue: remember ? (localStorage.getItem(LOGIN_PWD)) : '',
									rules: [{ required: true, message: '请输入您的密码' }]
								})(
									<Input className={styles.loginInput} prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />} type="password" placeholder="密码" />
								)}
							</FormItem>
							<FormItem>
								{getFieldDecorator('remember', {
									valuePropName: 'checked',
									initialValue: remember
								})(
									<Checkbox className={styles.loginCheckbox}>记住密码</Checkbox>
								)}
							</FormItem>
						</Form>
					</div>
					<Button className={styles.loginBtn} type="primary" onClick={this.login.bind(this)}>登录</Button>
				</div>
			</div>
		);
	}

	private login() {
		this.props.form.validateFieldsAndScroll((error, values) => {
			if (!!error) {
				return;
			}
			// TODO 登录请求
			const isRemember = Number(values.remember) === 1;
			localStorage.setItem(REMEMBER_PWD, Number(values.remember).toString());
			localStorage.setItem(LOGIN_USER, values.username);
			if (isRemember) {
				localStorage.setItem(LOGIN_PWD, values.password);
			}
			this.props.dispatch(routerRedux.push('/admin'));
		});
	}
}

const Login = Form.create()(LoginForm);

export default connect()(Login);
