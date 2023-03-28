import { ADD_COURSE } from './actionTypes.js';

export const addCourse = (course) => ({
	type: ADD_COURSE,
	payload: course,
});

export const deleteCourse = (courseId) => ({
	type: ADD_COURSE,
	payload: courseId,
});

export const updateCourse = (course) => ({
	type: ADD_COURSE,
	payload: course,
});
