import React, { MouseEventHandler } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const Button = function Button({
	className,
	text,
	onClick,
}: {
	className: string | '';
	text: string | undefined;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
	return (
		<button onClick={onClick} className={cn(styles.button, className)}>
			{text}
		</button>
	);
};

export default Button;
