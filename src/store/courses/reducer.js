import { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from './actionTypes';

const initialStateOfStore = {
	courses: [],
};

const coursesReducer = (state = initialStateOfStore, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return { ...state, courses: [...state.courses, action.payload] };
		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== action.payload),
			};
		case UPDATE_COURSE:
			return {
				...state,
				courses: state.courses.map((course) =>
					course.id === action.payload.id ? action.payload : course
				),
			};
		default:
			return state;
	}
};

export default coursesReducer;
