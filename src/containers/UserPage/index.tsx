import React from 'react';
import Header from './Header';
import LiveShow from './LiveShow';
import Media from './Media';
import styles from './styles.module.scss';

const UserPage = function UserPage() {
	return (
		<div className={styles.userPage}>
			<Header data={undefined} />
			<LiveShow />
			<Media />
		</div>
	);
};

export default UserPage;
