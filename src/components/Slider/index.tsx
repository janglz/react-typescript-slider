import React from 'react';
import styles from './styles.module.scss';

const Slider = function Slider({
	children,
}: {
	children: React.ReactElement | React.ReactElement[];
}) {
	return (
		<div className={styles.slider}>
			{React.Children.map(
				children,
				(child) =>
					child && (
						<div>
							{typeof child.type === 'function'
								? React.cloneElement(child)
								: child}
						</div>
					)
			)}
		</div>
	);
};

export default Slider;
