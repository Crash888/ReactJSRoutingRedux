import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

export const Root = ({store, actions}) => {
	return (
		<Provider store={store}>
			<App store={store} actions={actions} />
		</Provider>
	);
}

export default Root;
