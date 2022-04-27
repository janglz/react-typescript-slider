import React from 'react';
import Description from './Description';
import HeaderImage from './HeaderImage';
import InfoBar from './InfoBar';
import styles from './styles.module.scss';

const Header = function Header({ data }: { data: any }) {
	return (
		<div className={styles.header}>
			<HeaderImage className={styles.headerImage} />
			<InfoBar />
			<Description className={styles.description} />
		</div>
	);
};

export default Header;
