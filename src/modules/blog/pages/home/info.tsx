import React from 'react';

import Avatar from '../../assets/images/avator.jpg';
import styles from './info.scss';

const Info = () => {
	return (
		<div className={styles.info}>
			<img className={styles.infoAvatar} src={Avatar} />
			<div className={styles.infoName}>民仔</div>
			<div className={styles.infoLabel}>
				<div>
					<div className={styles.infoLabelCount}>0</div>
					<div className={styles.infoLabelName}>文章</div>
				</div>
				<div>
					<div className={styles.infoLabelCount}>0</div>
					<div className={styles.infoLabelName}>分类</div>
				</div>
				<div>
					<div className={styles.infoLabelCount}>0</div>
					<div className={styles.infoLabelName}>访客</div>
				</div>
			</div>
			<div className={styles.infoSocial}>
				<div className={styles.infoSocialName}>
					<i />
					<span>GitHub</span>
				</div>
			</div>
		</div>
	);
};

export default Info;
