import { LOGIN, LOGOUT } from './actionTypes.js';

export const login = (user) => ({
	type: LOGIN,
	payload: user,
});

export const logout = (user) => ({
	type: LOGOUT,
	payload: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
});
