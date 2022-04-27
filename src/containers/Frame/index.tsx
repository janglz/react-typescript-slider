import React from 'react';
import styles from './styles.module.scss';

const Frame = function Frame() {
	return (
		<div className={styles.frameWrapper}>
			<div className={styles.frameInner}>
				<iframe
					className={styles.frame}
					// sandbox="allow-pointer-lock"
				/>
			</div>
		</div>
	);
};

export default Frame;
