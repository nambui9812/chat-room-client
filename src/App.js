import React from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import './App.css';

import Introduction from './conponents/Introduction';
import Home from './conponents/Home';
import Main from './conponents/Main';

import store from './store';

export default class App extends React.Component {

	render() {
		const { UserReducer } = store.getState();
		
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Switch>
							<Route path="/app/:roomId">
								{UserReducer.token ? <Main /> : <Home />}
							</Route>

							<Route path="/app">
								{UserReducer.token ? <Main /> : <Home />}
							</Route>

							<Route path="/">
								<Introduction />
							</Route>
						</Switch>					
					</div>
				</Router>
			</Provider>
		)
	}
};
