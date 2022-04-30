import React from 'react';
import Frame from 'src/containers/Frame';
import Chat from 'src/containers/Chat';
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
