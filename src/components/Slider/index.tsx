import React from 'react';
import { useElementWidth } from 'src/hooks/useElementWidth';
import Slide from './Slide';
import styles from './styles.module.scss';

const Slider = function Slider({
	activeSlide,
	children,
}: {
	children: React.ReactElement | React.ReactElement[];
	activeSlide: number;
}) {
	const [ref, width] = useElementWidth();

	const childrenCount = (Array.isArray(children) && children.length) || 1;
	const slidesCommonWidth = width * childrenCount;
	const translateTo = -width * activeSlide;
	console.log(translateTo);
	return (
		<div className={styles.sliderWrapper} ref={ref}>
			<div
				className={styles.slider}
				style={{
					width: slidesCommonWidth,
					// position: 'absolute',
					position: 'relative',
					// transform: `translate(${translateTo})`,
					left: translateTo,
				}}
			>
				{React.Children.map(
					children,
					(child, i) =>
						child && (
							<Slide isActive={activeSlide === i} number={i}>
								{typeof child.type === 'function'
									? React.cloneElement(child)
									: child}
							</Slide>
						)
				)}
			</div>
		</div>
	);
};

export default Slider;
