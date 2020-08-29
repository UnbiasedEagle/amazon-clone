import React, { useReducer } from 'react';
import AmazonContent from './amazonContext';
import AmazonReducer from './amazonReducer';

const AmazonState = (props) => {
	const initialState = {
		basket: [],
		user: null
	};

	const [ state, dispatch ] = useReducer(AmazonReducer, initialState);

	const addToBasket = (product) => {
	
		dispatch({
			type: 'ADD_TO_BASKET',
			payload: product
		});
	};

	const removeFromBasket = (id) => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			payload: id
		});
	};

	const setUser = (user) => {
		dispatch({
			type: 'SET_USER',
			payload: user
		});
	};

	return (
		<AmazonContent.Provider
			value={{
				basket: state.basket,
				user: state.user,
				addToBasket,
				removeFromBasket,
				setUser
			}}
		>
			{props.children}
		</AmazonContent.Provider>
	);
};

export default AmazonState;
