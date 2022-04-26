import React from 'react';
import styles from './styles.module.scss';

const Frame = function Frame() {
	return (
		<div className={styles.frame}>
			<iframe className={styles.frameContent} src="" />
		</div>
	);
};

export default Frame;
