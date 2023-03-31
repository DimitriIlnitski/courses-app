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
			console.log('LOGIN');
			return { ...state, ...action.payload, isAuth: true };
		case RE_LOGIN:
			console.log('RELOGIN');
			return { ...action.payload, isAuth: true };
		case LOGOUT:
			console.log('LOGOUT');
			return userInitialState;
		case REGISTRATION:
			console.log('REGISTRATION');
			return state;
		default:
			return state;
	}
};

export default userReducer;
