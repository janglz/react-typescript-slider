import Slider from 'src/components/Slider';
import { observer } from 'mobx-react';
import React from 'react';
import Header from './Header';
import LiveShow from './LiveShow';
import Media from './Media';
import styles from './styles.module.scss';
import { useStores } from 'src/hooks/useStores';
import { TABS } from 'src/constants';

const UserPage = observer(() => {
	const { selectedTab } = useStores();
	const activeSlide = Object.values(TABS).indexOf(selectedTab);
	console.log(activeSlide, selectedTab);
	return (
		<div className={styles.userPage}>
			<Header data={undefined} />
			<Slider activeSlide={activeSlide}>
				<LiveShow />
				<Media />
			</Slider>
		</div>
	);
});

export default UserPage;
