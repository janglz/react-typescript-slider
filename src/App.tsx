import React from 'react';
import Frame from './Frame';
import styles from './theme/main.scss';

const App = function App() {
	return (
		<div className={styles.main}>
			<Frame />
		</div>
	);
};

export default App;
