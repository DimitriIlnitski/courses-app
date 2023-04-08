import Header from '../Header';

import { screen, render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { mockedStore } from '../../../constants';

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
