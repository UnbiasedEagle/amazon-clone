export default (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return { ...state, basket: [ ...state.basket, action.payload ] };
		case 'REMOVE_FROM_BASKET':
			let basket=state.basket
			const requiredIndex=state.basket.map(item=>{
				return item.id
			}).indexOf(action.payload)
			basket.splice(requiredIndex,1)
			return {
				...state,basket:basket
			}
		case 'SET_USER':
			return {
				...state,user:action.payload
			}
		default:
			return state;
	}
};
