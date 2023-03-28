import * as action from './actionTypes';

const initialStateOfStore = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
};

const userReducer = (state = initialStateOfStore, action) => {
	switch (action.type) {
		case action.LOGIN:
			return { ...state, user: action.payload };
		case action.LOGOUT:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default userReducer;
