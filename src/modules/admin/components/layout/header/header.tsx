import React, { MouseEvent, SFC } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import styles from './header.scss';

interface IProps {
	user?: string;
	logout(e: MouseEvent<HTMLSpanElement>): void;
}

const Header: SFC<IProps> = ({ user, logout }) => {
	const menu = (
		<Menu>
			<Menu.Item>
				<span onClick={logout}>退出</span>
			</Menu.Item>
		</Menu>
	);
	return (
		<div className={styles.header}>
			<div className={styles.left}></div>
			<div className={styles.right}>
				<Dropdown overlay={menu}>
					<span className={styles.user}>{user + ' '}<Icon type="down" /></span>
				</Dropdown>
			</div>
		</div>
	);
};

export default Header;
