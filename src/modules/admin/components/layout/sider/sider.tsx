import React, { SFC } from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import H from 'history';

import styles from './sider.scss';

interface IProps {
	menus: Array<ItemProps>;
	location: H.Location<H.LocationState>;
}

interface ItemProps {
	id: string;
	route: string;
	icon: string;
	name: string;
}

const Sider: SFC<IProps> = ({ menus, location }) => {
	const menuItems = menus.map((item: ItemProps) => {
		return (
			<Menu.Item key={item.id}>
				<Link to={item.route}>
					{item.icon && <i className={item.icon + ' menu-icon'} />}
					<span style={{ marginLeft: '12px' }}>{item.name}</span>
				</Link>
			</Menu.Item>
		);
	});

	const isMatch = (item: ItemProps) => item.route && location.pathname.startsWith(item.route);

	const getDefaultMenu = (arr: Array<ItemProps>) => {
		for (let item of arr) {
			if (isMatch(item)) {
				return item;
			}
		}
		return null;
	};

	const currentMenu = getDefaultMenu(menus);
	const defaultSelectedKeys = currentMenu ? [currentMenu.id] : [];

	return (
		<div className={styles.sider}>
			<Menu className={styles.menu + ' custom-menu'} selectedKeys={defaultSelectedKeys}>
				{menuItems}
			</Menu>
		</div>
	);
};

export default Sider;
