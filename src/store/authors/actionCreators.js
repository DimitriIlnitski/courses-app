import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes.js';
import { addAuthorRequest, getRequest } from '../../services.js';

export const addAuthor = (author) => {
	return async (dispatch) => {
		let token = localStorage.getItem('authData');
		let { result, successful } = await addAuthorRequest(author, token);
		if (successful) dispatch({ type: ADD_AUTHOR, payload: result });
	};
};

export const getAuthors = () => {
	return async (dispatch) => {
		let { result, successful } = await getRequest('/authors/all');
		if (successful) dispatch({ type: GET_AUTHORS, payload: result });
	};
};
