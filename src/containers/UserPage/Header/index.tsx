import React from 'react';
import Description from './Description';
import HeaderImage from './HeaderImage';
import InfoBar from './InfoBar';
import Tablinks from './Tablinks';
import styles from './styles.module.scss';

const Header = function Header({ data }: { data: any }) {
	return (
		<div className={styles.header}>
			<HeaderImage className={styles.headerImage} />
			<InfoBar />
			<Description className={styles.description} />
			<Tablinks />
		</div>
	);
};

export default Header;
