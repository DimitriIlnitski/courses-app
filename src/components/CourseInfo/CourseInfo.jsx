import './CourseInfo.css';

import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatTime, getAuthorsList } from '../../helpers';
import { getCourses, getAuthors } from '../../selectors';

function CourseInfo() {
	const courseList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);

	const { id } = useParams();
	console.log(id);

	const memCourse = useMemo(() => {
		return courseList.find((item) => item.id === id);
	}, [id, courseList]);

	return (
		<>
			<Link to='/courses' className='course-info__link'>
				{'< Back to courses'}
			</Link>
			<article className='course-info'>
				<h2 className='course-info__title'>{memCourse.title}</h2>
				<div>
					<p className='course-info__description'>{memCourse.description}</p>
				</div>
				<div className='course-info__right-side'>
					<p className='course-info__authors'>
						<b>ID:</b> {memCourse.id}
					</p>
					<p>
						<b>Duration:</b> {formatTime(memCourse.duration)} hours
					</p>
					<p>
						<b>Created:</b> {memCourse.creationDate}
					</p>
					<p className='course-info__authors'>
						<b>Authors:</b> {getAuthorsList(memCourse.authors, authorsList)}
					</p>
				</div>
			</article>
		</>
	);
}

export default CourseInfo;
