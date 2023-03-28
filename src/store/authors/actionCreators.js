import { ADD_AUTHOR } from './actionTypes.js';

export const addAuthor = (author) => ({
	type: ADD_AUTHOR,
	payload: author,
});
