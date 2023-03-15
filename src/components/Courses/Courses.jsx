import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

function Courses() {
	mockedCoursesList.map((course) => {
		const {authors} = course;
		let authorsArray = authors.map()
	})
	return <CourseCard {...item} />;
}

export default Courses;
