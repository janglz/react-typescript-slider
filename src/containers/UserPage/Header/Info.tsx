import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

const Info = function Info({ className }: { className: string }) {
	const isLoading = false;
	const mock = { name: 'fkjdkj', isOnline: true };
	const { name, isOnline } = mock;
	return (
		<div className={className}>
			{!isLoading && (
				<div className={styles.nameWrapper}>
					<span className={styles.name}>{name}</span>
					<span>
						<span
							className={cn(
								styles.statusIndicator,
								isOnline ? styles.online : styles.offline
							)}
						/>
						{isOnline ? 'Online' : 'Offline'}
					</span>
				</div>
			)}
		</div>
	);
};

export default Info;
