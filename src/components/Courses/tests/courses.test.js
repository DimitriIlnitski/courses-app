import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CourseForm from '../../CourseForm/CourseForm';
import Courses from '../Courses';
import { ADD_NEW_COURSE } from '../../../constants';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		role: 'user',
	},
	courses: [],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Courses', () => {
	test('should display amount of CourseCard equal length of courses array', async () => {
		const state = {
			courses: [
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
			],
		};
		mockedStore.getState = () => ({
			...mockedState,
			...state,
		});
		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['']}>
					<Courses />
				</MemoryRouter>
			</Provider>
		);
		const courses = await screen.findAllByTestId('course-card__test');
		expect(courses.length).toBe(state.courses.length);
	});

	test('should display empty container if courses array length is 0', async () => {
		const state = { courses: [] };
		mockedStore.getState = () => ({
			...mockedState,
			...state,
		});
		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['']}>
					<Courses />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByTestId('courses-container')).toBeEmptyDOMElement();
	});

	test('CourseForm should be showed after a click on a button "Add new course"', () => {
		const state = { user: { role: 'admin' } };
		mockedStore.getState = () => ({
			...mockedState,
			...state,
		});
		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['/courses']}>
					<Routes>
						<Route path={'/courses/add'} element={<CourseForm />} />
						<Route path={'/courses'} element={<Courses />} />
					</Routes>
				</MemoryRouter>
			</Provider>
		);
		const button = screen.getByText(ADD_NEW_COURSE);
		fireEvent.click(button);
		expect(screen.getByTestId('course-form-test')).toBeInTheDocument();
	});
});
