import React, { MouseEventHandler } from 'react';
import styles from './styles.module.scss';

const Slide = function Slide({
	// className,
	isActive,
	number,
	children,
}: // ref,
{
	number: number;
	// className: string;
	isActive: boolean;
	children: React.ReactElement;
	// ref: React.ElementRef<any>;
}) {
	return (
		<div
			// onClick={onClick}
			className={styles.slide}
			style={{}}
		>
			{children}
		</div>
	);
};

export default Slide;
