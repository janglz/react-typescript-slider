import Slider from 'src/components/Slider';
import React from 'react';
import Header from './Header';
import LiveShow from './LiveShow';
import Media from './Media';
import styles from './styles.module.scss';

const UserPage = function UserPage() {
	return (
		<div className={styles.userPage}>
			<Header data={undefined} />
			<Slider>
				<LiveShow />
				<Media />
			</Slider>
		</div>
	);
};

export default UserPage;
