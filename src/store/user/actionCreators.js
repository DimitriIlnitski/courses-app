import { LOGIN, LOGOUT } from './actionTypes.js';

export const loginUser = (user) => ({
	type: LOGIN,
	payload: { ...user },
});

export const logoutUser = () => ({
	type: LOGOUT,
});
