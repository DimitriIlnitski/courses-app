import './Courses.css';

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchBar, CourseCard } from './components';
import { Button } from '../../common';

import { getAuthorsList, filteredList, AppContext } from '../../helpers';
import { ADD_NEW_COURSE } from '../../constants';

function Courses() {
	const { courseList, authorsList } = useContext(AppContext);
	const navigate = useNavigate();

	const [searchParamsStore, setSearchParamsStore] = useState('');
	const [searchParams, setSearchParams] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchParams(searchParamsStore);
	};

	const getSearchData = ({ target: { value } }) => {
		setSearchParamsStore(value);
		if (value.length === 0) {
			setSearchParams(value);
		}
	};
	const renderCourseList = (searchParams, courseList, authorsList) => {
		return filteredList(searchParams, courseList).map((course) => {
			const { id, authors } = course;
			let authorsStringList = getAuthorsList(authors, authorsList);
			return <CourseCard key={id} {...course} authors={authorsStringList} />;
		});
	};
	const navigateToAddPage = () => {
		navigate('/courses/add');
	};
	return (
		<>
			<div className='course-controls'>
				<SearchBar
					inputData={searchParamsStore}
					getInputData={getSearchData}
					handleSubmit={handleSubmit}
				/>
				<Button
					buttonText={ADD_NEW_COURSE}
					buttonClass={'course-controls__button'}
					onClickHandler={navigateToAddPage}
				/>
			</div>
			{renderCourseList(searchParams, courseList, authorsList)}
		</>
	);
}

export default Courses;
