import coursesReducer from '../reducer';
import { ADD_COURSE, GET_COURSES } from '../actionTypes';

describe('courseReducer', () => {
	test('should return the initial state', () => {
		const state = undefined;

		const action = {
			type: undefined,
		};

		expect(coursesReducer(state, action)).toStrictEqual([]);
	});

	test('should handle add new course and returns new state', () => {
		const state = [];
		const course = {
			id: '0001',
			title: 'title',
			description: 'description',
			creationDate: '8/4/2023',
			duration: 180,
			authors: ['Jack London', 'Mark Twain'],
		};
		const action = {
			type: ADD_COURSE,
			payload: course,
		};
		expect(coursesReducer(state, action)).toEqual([course]);
	});

	test('should handle GET_COURSES and returns new state', () => {
		const state = [];
		const courses = [
			{
				id: '0001',
				title: 'title1',
				description: 'description1',
				creationDate: '8/4/2023',
				duration: 180,
				authors: ['Jack London', 'Mark Twain'],
			},
			{
				id: '0002',
				title: 'title2',
				description: 'description2',
				creationDate: '8/4/2023',
				duration: 180,
				authors: ['Peter Pan', 'Superman'],
			},
		];
		const action = {
			type: GET_COURSES,
			payload: courses,
		};

		expect(coursesReducer(state, action)).toEqual(courses);
	});
});
