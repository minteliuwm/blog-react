import React, { SFC, Dispatch } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import styles from './breadcrumb.scss';
import { CommonsState } from 'models/commons';

interface IProps {
	commons: CommonsState;
	dispatch: Dispatch<{}>;
}

const Bread: SFC<IProps> = ({ commons, dispatch }) => {
	const clickToBack = () => {
		dispatch(routerRedux.goBack());
	};

	return commons.breadcrumb.canBack ? (
		<div className={styles.breadcrumb}>
			<div className={styles.name}>
				<div className={styles.icon} onClick={clickToBack}>ICON</div>
				<div style={{ marginLeft: '16px' }}>
					{commons.breadcrumb.name}
				</div>
			</div>
		</div>
	) : (
			<div className={styles.breadcrumb}>
				{commons.breadcrumb.name}
			</div>
		);
};

const mapStateToProps = (state: { commons: CommonsState }) => {
	return {
		commons: state.commons
	};
};

export default connect(mapStateToProps)(Bread);
