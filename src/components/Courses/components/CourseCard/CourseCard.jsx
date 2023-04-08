import './CourseCard.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../common';

import { formatTime } from '../../../../helpers';
import { SHOW_COURSE } from '../../../../constants';
import { getUser } from '../../../../selectors';
import { deleteCourse } from '../../../../store/courses/actionCreators';
import PropTypes from 'prop-types';

function CourseCard(props) {
	const { id, title, description, creationDate, duration, authors } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { role } = useSelector(getUser);

	const coursePage = () => {
		navigate(`/courses/${id}`);
	};
	const deleteCourseInCard = () => {
		let token = localStorage.getItem('authData');
		dispatch(deleteCourse(id, token));
	};
	const updateCourseInCard = () => {
		navigate(`/courses/update/${id}`);
	};

	return (
		<article data-testid='course-card__test' className='course-card'>
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
				<div
					className={
						role === 'admin'
							? 'course-card__button-pack'
							: 'course-card__button-single'
					}
				>
					<Button
						buttonText={SHOW_COURSE}
						buttonClass={'course-card__button'}
						onClickHandler={coursePage}
					/>
					{role === 'admin' && (
						<Button
							buttonClass={'course-card__square-button-left'}
							onClickHandler={updateCourseInCard}
						/>
					)}
					{role === 'admin' && (
						<Button
							buttonClass={'course-card__square-button-right'}
							onClickHandler={deleteCourseInCard}
						/>
					)}
				</div>
			</div>
		</article>
	);
}

CourseCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	creationDate: PropTypes.string,
	duration: PropTypes.number,
	authors: PropTypes.string,
};

export default CourseCard;
