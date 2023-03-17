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
	const getParams = (param) => {
		setSearchParamsStore(param);
		if (param.length === 0) {
			setSearchParams(param);
		}
	};

	return (
		<section className='courses'>
			<div className='courses_wrapper'>
				<SearchBar getParams={getParams} handleSubmit={handleSubmit} />
				<Button buttonText={'Add new course'} onClickHandler={toggleView} />
				{filteredList(searchParams, courseList).map((course) => {
					const { id, authors } = course;
					let authorsStringList = getAuthorsList(authors, authorsList);
					return (
						<CourseCard key={id} {...course} authors={authorsStringList} />
					);
				})}
			</div>
		</section>
	);
}

export default Courses;
