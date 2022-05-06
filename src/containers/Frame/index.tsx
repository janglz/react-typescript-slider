import React from 'react';
import styles from './styles.module.scss';

const Frame = function Frame() {
	return (
		<div className={styles.frameWrapper}>
			<div className={styles.frameInner}>
				<iframe
					className={styles.frame}
					// sandbox="allow-pointer-lock"
					// height="1200px"
					// width="100%"
					src="https://www.youtube.com/embed/sPgqEHsONK8?controls=0&autoplay=true&mute=1"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				/>
				{/* <iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/sPgqEHsONK8"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe> */}
			</div>
		</div>
	);
};

export default Frame;
