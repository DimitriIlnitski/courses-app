import CourseForm from '../CourseForm';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { CREATE_AUTHOR, ADD_AUTHOR, DELETE_AUTHOR } from '../../../constants';

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

describe('CourseForm', () => {
	beforeEach(() => {
		const state = {
			authors: [
				{ id: '0001', name: 'Jack London' },
				{ id: '0002', name: 'Mark Twain' },
			],
		};
		mockedStore.getState = () => ({
			...mockedState,
			...state,
		});
		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['']}>
					<CourseForm />
				</MemoryRouter>
			</Provider>
		);
	});

	test('should show authors lists (all and course authors)', () => {
		expect(screen.getByTestId(`test-Add author`)).toBeInTheDocument();
		expect(screen.getByTestId(`test-Delete author`)).toBeInTheDocument();
	});

	test("'Create author' click button should call dispatch", async () => {
		const button = screen.getByText(CREATE_AUTHOR);
		const inputElement = screen.getByTestId('test-add-author');
		fireEvent.change(inputElement, { target: { value: 'NewAuthor' } });
		fireEvent.click(button);

		await waitFor(() => expect(mockedStore.dispatch).toBeCalledTimes(1));
	});

	test("'Add author' button click should add an author to course authors list", () => {
		expect(
			screen.queryAllByTestId(`test-author-tile-Delete author`).length
		).toBe(0);

		fireEvent.click(screen.getAllByRole('button', { name: ADD_AUTHOR })[0]);

		expect(screen.getAllByTestId(`test-author-tile-Delete author`).length).toBe(
			1
		);
	});

	test("'Delete author' button click should delete an author from the course list", () => {
		fireEvent.click(screen.getAllByRole('button', { name: ADD_AUTHOR })[0]);

		expect(screen.getAllByTestId(`test-author-tile-Delete author`).length).toBe(
			1
		);

		fireEvent.click(screen.getAllByRole('button', { name: DELETE_AUTHOR })[0]);

		expect(screen.queryByTestId(`test-author-tile-Delete author`)).toBe(null);
	});
});
