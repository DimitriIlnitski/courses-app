import { LOGIN, LOGOUT, RE_LOGIN, REGISTRATION } from './actionTypes';

const userInitialState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, ...action.payload, isAuth: true };
		case RE_LOGIN:
			return { ...action.payload, isAuth: true };
		case LOGOUT:
			return userInitialState;
		case REGISTRATION:
			return state;
		default:
			return state;
	}
};

export default userReducer;
