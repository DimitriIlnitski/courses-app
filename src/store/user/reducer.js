import { LOGIN, LOGOUT } from './actionTypes';

const userInitialState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem(
				'authData',
				JSON.stringify({ ...action.payload, isAuth: true })
			);
			return { ...action.payload, isAuth: true };
		case LOGOUT:
			localStorage.clear();
			return userInitialState;
		default:
			return state;
	}
};

export default userReducer;
