import React from 'react';
import Button from '../../../components/Button';
import Avatar from './Avatar';
import Info from './Info';
import styles from './styles.module.scss';

const InfoBar = function InfoBar() {
	return (
		<div className={styles.infoBar}>
			<Avatar className={styles.avatarRound} />
			<Info className={''} />
			<Button text="Watch Now" onClick={undefined} className={''} />
		</div>
	);
};

export default InfoBar;
