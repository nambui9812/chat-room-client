import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Home from './conponents/Home';
import Main from './conponents/Main';

import store from './store';

export default class App extends React.Component {

	render() {
		const { UserReducer } = store.getState();
		
		return (
			<Provider store={store}>
				<div className="App">
					{UserReducer.token ? <Main /> : <Home />}
				</div>
			</Provider>
		)
	}
};
