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
				className={selectedTab === TABS.LIVE ? styles.activeTab : ''}
				onClick={() => setTab(TABS.LIVE)}
			/>
			<Tablink
				text="Media"
				className={selectedTab === TABS.MEDIA ? styles.activeTab : ''}
				onClick={() => setTab(TABS.MEDIA)}
			/>
		</div>
	);
});

export default Tablinks;
