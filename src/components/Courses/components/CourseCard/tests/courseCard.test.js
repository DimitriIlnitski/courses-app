import CourseCard from '../CourseCard';

import { screen, render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { mockedStore } from '../../../../../constants';

describe('CourseCard', () => {
	beforeEach(() => {
		const title = 'Title';
		const description = 'Description';
		const duration = 120;
		const authors = 'Jack London, Mark Twain';
		const date = '7.4.2023';

		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['/courses']}>
					<CourseCard
						title={title}
						description={description}
						duration={duration}
						authors={authors}
						creationDate={date}
					/>
				</MemoryRouter>
			</Provider>
		);
	});

	test('should display title', () => {
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Title'
		);
	});

	test('should display description', () => {
		expect(screen.getByText('Description')).toBeInTheDocument();
	});

	test('should display duration in the correct format', () => {
		expect(screen.getByText('02:00 hours')).toBeInTheDocument();
	});

	test('should display authors list', () => {
		expect(screen.getByText('Jack London, Mark Twain')).toBeInTheDocument();
	});

	test('should display created date in the correct format', () => {
		expect(screen.getByText('7.4.2023')).toBeInTheDocument();
	});
});
