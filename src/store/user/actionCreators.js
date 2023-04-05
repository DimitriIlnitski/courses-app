import { LOGIN, LOGOUT, RE_LOGIN, REGISTRATION } from './actionTypes.js';
import {
	getUserRequest,
	loginAndRegistrationRequest,
	logoutRequest,
} from '../../services.js';

export const registrationUser = (path, newUser) => {
	return async (dispatch) => {
		let { successful } = await loginAndRegistrationRequest(path, newUser);
		if (successful) dispatch({ type: REGISTRATION });
	};
};

export const loginUser = (path, data) => {
	return async (dispatch) => {
		let { result, successful } = await loginAndRegistrationRequest(path, data);
		if (successful) {
			let userData = await getUserRequest(result);
			localStorage.setItem('authData', result);
			if (userData) dispatch({ type: LOGIN, payload: userData });
		}
	};
};

export const reLoginUser = (token) => {
	return async (dispatch) => {
		if (token) {
			let userData = await getUserRequest(token);
			dispatch({ type: RE_LOGIN, payload: userData });
		}
	};
};

export const logoutUser = (token) => {
	return async (dispatch) => {
		logoutRequest(token);
		localStorage.clear();
		dispatch({ type: LOGOUT });
	};
};
