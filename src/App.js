import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import auth from './firebase';
import AmazonContext from './context/amazonContext';

const App = () => {
	const amazonContext = useContext(AmazonContext);
	const { setUser } = amazonContext;

	useEffect(
		() => {
			const unsubscribe = auth.onAuthStateChanged((authUser) => {
				if (authUser) {
					// User is logged in
					setUser(authUser);
				} else {
					// User is not logged in
					setUser(null);
				}
			});
			
			return () => {
				unsubscribe();
			};
			
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/checkout' component={Checkout} />
				<Route exact path='/login' component={Login} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
