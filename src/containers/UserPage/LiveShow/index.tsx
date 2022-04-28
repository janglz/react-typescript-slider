import React from 'react';
import Frame from '../../Frame';
import Chat from '../../Chat';
import styles from './styles.module.scss';

const LiveShow = function LiveShow() {
	return (
		<div>
			<div className={styles.overlayWrapper}>
				<Frame />
				<div className={styles.overlay} />
			</div>
			<Chat />
		</div>
	);
};

export default LiveShow;
