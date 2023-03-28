import { ADD_AUTHOR } from './actionTypes';

const initialStateOfAuthor = {
	authors: [],
};

const coursesReducer = (state = initialStateOfAuthor, action) => {
	switch (action.type) {
		case ADD_AUTHOR:
			return { ...state, authors: [...state.authors, action.payload] };
		default:
			return state;
	}
};

export default coursesReducer;
