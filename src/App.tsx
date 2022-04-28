import React from 'react';
import UserPage from './containers/UserPage';
import { StoreProvider } from './contexts/StoreContext';
import { UIStore } from './store/store';
import styles from './theme/main.scss';

const App = function App() {
	return (
		<div className="app-root">
			<StoreProvider store={UIStore}>
				<UserPage />
			</StoreProvider>
		</div>
	);
};

export default App;
