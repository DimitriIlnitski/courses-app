import './CourseCard.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../common';

import { formatTime } from '../../../../helpers';
import { SHOW_COURSE } from '../../../../constants';

function CourseCard(props) {
	const { id, title, description, creationDate, duration, authors } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const coursePage = () => {
		navigate(`/courses/${id}`);
	};
	const deleteCourse = () => {
		dispatch({ type: 'DELETE_COURSE', payload: id });
	};
	const updateCourse = (id) => {};

	return (
		<article className='course-card'>
			<div>
				<h2 className='course-card__title'>{title}</h2>
				<p className='course-card__description'>{description}</p>
			</div>
			<div className='course-card__right-side'>
				<p className='course-card__authors'>
					<b>Authors:</b> {authors}
				</p>
				<p>
					<b>Duration:</b> {formatTime(duration)} hours
				</p>
				<p>
					<b>Created:</b> {creationDate}
				</p>
				<div className='course-card__button-pack'>
					<Button
						buttonText={SHOW_COURSE}
						buttonClass={'course-card__button'}
						onClickHandler={coursePage}
					/>
					<Button
						buttonClass={'course-card__square-button-left'}
						onClickHandler={updateCourse}
					/>
					<Button
						buttonClass={'course-card__square-button-right'}
						onClickHandler={deleteCourse}
					/>
				</div>
			</div>
		</article>
	);
}

export default CourseCard;
