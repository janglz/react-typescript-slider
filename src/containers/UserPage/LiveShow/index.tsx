import React from 'react';
import Frame from '../../Frame';
import styles from './styles.module.scss';

const LiveShow = function LiveShow() {
	return (
		<div className={styles.frameWrapper}>
			<Frame />
			<div className={styles.overlay} />
		</div>
	);
};

export default LiveShow;
