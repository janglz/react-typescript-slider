import Tablink from '../../../components/Tablink';
import React from 'react';
import styles from './styles.module.scss';

const Tablinks = function Tablinks() {
	const setActiveSlide = () => {};
	return (
		<div className={styles.Tablinks}>
			<Tablink text="Live Show" className={''} onClick={setActiveSlide} />
			<Tablink text="Media" className={''} onClick={setActiveSlide} />
		</div>
	);
};

export default Tablinks;
