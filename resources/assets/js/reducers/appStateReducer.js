const initialState = {
	popupCartOpen: false
};

let newState;

export const appStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN_CART':
			newState = Object.assign({}, state, {
				popupCartOpen: true
			});
			return newState;
			break;
		case 'CLOSE_CART':
			newState = Object.assign({}, state, {
				popupCartOpen: false
			});
			return newState;
			break;

		default:
			return state;
			break;
	}
};
