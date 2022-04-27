import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const Media = function Media() {
	//mock
	const data: React.ReactNode[] = ['a', 'b', 'c', 'd', 'e'];
	return (
		<div className={styles.grid}>
			{data.length &&
				data.map((el) => (
					<div className={cn(styles.card)} key={Math.random()}>
						{el}
					</div>
				))}
		</div>
	);
};

export default Media;
