import Header from '../Header';

import { screen, render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

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

describe('Header', () => {
	test("should have logo and user's name", () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['']}>
					<Header />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getByAltText('logo')).toBeInTheDocument();
		expect(
			screen.getByText(mockedStore.getState().user.name)
		).toBeInTheDocument();
	});
});
