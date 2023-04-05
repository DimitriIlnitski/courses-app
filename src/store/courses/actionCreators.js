import {
	ADD_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
	GET_COURSES,
} from './actionTypes.js';

import {
	deleteCourseRequest,
	updateCourseRequest,
	addCourseRequest,
	getRequest,
} from '../../services.js';

export const addCourse = (course) => {
	return async (dispatch) => {
		let token = localStorage.getItem('authData');
		let { result } = await addCourseRequest(course, token);
		dispatch({ type: ADD_COURSE, payload: result });
	};
};

export const deleteCourse = (courseId, token) => {
	return async (dispatch) => {
		if (courseId) {
			let { successful } = await deleteCourseRequest(courseId, token);
			if (successful) dispatch({ type: DELETE_COURSE, payload: courseId });
		}
	};
};

export const updateCourse = (data) => {
	return async (dispatch) => {
		let token = localStorage.getItem('authData');
		let { result, successful } = await updateCourseRequest(data, token);
		if (successful) dispatch({ type: UPDATE_COURSE, payload: result });
	};
};

export const getCourses = () => {
	return async (dispatch) => {
		let { result, successful } = await getRequest('/courses/all');
		if (successful) dispatch({ type: GET_COURSES, payload: result });
	};
};
