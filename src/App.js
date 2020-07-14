import React from 'react';
import './App.css';

import Home from './conponents/Home';
import Main from './conponents/Main';

import store from './store';

export default class App extends React.Component {

	render() {
		const { UserReducer } = store.getState();
		
		return (
			<div className="App">
				{UserReducer.token ? <Main /> : <Home />}
			</div>
		)
	}
};
