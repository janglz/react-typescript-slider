import React, { MouseEventHandler } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

const Tablink = function Tablink({
	text,
	className,
	onClick,
}: {
	text: string;
	className: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
	return (
		<button onClick={onClick} className={cn(styles.talink, className)}>
			{text}
		</button>
	);
};

export default Tablink;
