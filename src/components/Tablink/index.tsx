import React, { MouseEventHandler } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

const Tablink = function Tablink({
	text,
	className,
	onClick,
	active,
}: {
	text: string;
	className: string;
	active: boolean;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
	return (
		<button
			onClick={onClick}
			className={cn(styles.tablink, className, {
				[styles.tablinkActive]: active,
			})}
		>
			{text}
		</button>
	);
};

export default Tablink;
