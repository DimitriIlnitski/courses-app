import './CourseCard.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../common';

import { formatTime } from '../../../../helpers';
import { SHOW_COURSE } from '../../../../constants';

function CourseCard(props) {
	const { id, title, description, creationDate, duration, authors } = props;
	const navigate = useNavigate();
	const coursePage = () => {
		navigate(`/courses/${id}`);
	};
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
				<Button
					buttonText={SHOW_COURSE}
					buttonClass={'course-card__button'}
					onClickHandler={coursePage}
				/>
			</div>
		</article>
	);
}

export default CourseCard;
