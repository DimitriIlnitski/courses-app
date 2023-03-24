import './CourseInfo.css';

import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext, formatTime, getAuthorsList } from '../../helpers';

function CourseInfo() {
	const { courseList, authorsList } = useContext(AppContext);
	const { id } = useParams();
	const course = courseList.find((item) => item.id === id);

	return (
		<>
			<Link to='/courses' className='course-info__link'>
				{'< Back to courses'}
			</Link>
			<article className='course-info'>
				<h2 className='course-info__title'>{course.title}</h2>
				<div>
					<p className='course-info__description'>{course.description}</p>
				</div>
				<div className='course-info__right-side'>
					<p className='course-info__authors'>
						<b>ID:</b> {course.id}
					</p>
					<p>
						<b>Duration:</b> {formatTime(course.duration)} hours
					</p>
					<p>
						<b>Created:</b> {course.creationDate}
					</p>
					<p className='course-info__authors'>
						<b>Authors:</b> {getAuthorsList(course.authors, authorsList)}
					</p>
				</div>
			</article>
		</>
	);
}

export default CourseInfo;
