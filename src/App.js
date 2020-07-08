import React from 'react';
import './App.css';

import Home from './conponents/Home';
import Main from './conponents/Main';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Home />
				<Main />
			</div>
		)
	}
};
