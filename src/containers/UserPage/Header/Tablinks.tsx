import Tablink from '../../../components/Tablink';
import React from 'react';
import { observer } from 'mobx-react';
import styles from './styles.module.scss';
import { TABS } from '../../../constants';
import { useStores } from './../../../hooks/useStores';

const Tablinks = observer(() => {
	const { setTab, selectedTab } = useStores();

	return (
		<div className={styles.Tablinks}>
			<Tablink
				text="Live Show"
				className={''}
				active={selectedTab === TABS.LIVE}
				onClick={() => setTab(TABS.LIVE)}
			/>
			<Tablink
				text="Media"
				className={''}
				active={selectedTab === TABS.MEDIA}
				onClick={() => setTab(TABS.MEDIA)}
			/>
		</div>
	);
});

export default Tablinks;
