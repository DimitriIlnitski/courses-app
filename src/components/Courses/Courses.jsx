import './Courses.css';
import React, { useState, useContext } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import getAuthorsList from '../../helpers/getAuthorsList';
import filteredList from '../../helpers/filteredList';
import Button from '../../common/Button/Button';
import AppContext from '../../helpers/AppContext';

function Courses() {
	const { toggleView, courseList, authorsList } = useContext(AppContext);

	const [searchParamsStore, setSearchParamsStore] = useState('');
	const [searchParams, setSearchParams] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchParams(searchParamsStore);
	};

	const getSearchData = (e) => {
		let value = e.target.value;
		setSearchParamsStore(value);
		if (value.length === 0) {
			setSearchParams(value);
		}
	};

	return (
		<main className='main'>
			<div className='main__wrapper'>
				<div className='course-controls'>
					<SearchBar
						inputData={searchParamsStore}
						getInputData={getSearchData}
						handleSubmit={handleSubmit}
					/>
					<Button
						buttonText={'Add new course'}
						buttonClass={'course-controls__button'}
						onClickHandler={toggleView}
					/>
				</div>
				{filteredList(searchParams, courseList).map((course) => {
					const { id, authors } = course;
					let authorsStringList = getAuthorsList(authors, authorsList);
					return (
						<CourseCard key={id} {...course} authors={authorsStringList} />
					);
				})}
			</div>
		</main>
	);
}

export default Courses;
