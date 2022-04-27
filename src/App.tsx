import React from 'react';
import UserPage from './containers/UserPage';
import styles from './theme/main.scss';

const App = function App() {
	return (
		<div className="app-root">
			<UserPage />
		</div>
	);
};

export default App;
