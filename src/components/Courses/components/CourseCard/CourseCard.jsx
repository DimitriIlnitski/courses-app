import './CourseCard.css';

import React from 'react';

import { Button } from '../../../../common';

import { formatTime } from '../../../../helpers';
import { SHOW_COURSE } from '../../../../constants';

function CourseCard(props) {
	const { title, description, creationDate, duration, authors } = props;
	return (
		<article className='course-card'>
			<div>
				<h2 className='course-card__title'>{title}</h2>
				<p className='course-card__description'>{description}</p>
			</div>
			<div className='course-card__left-side'>
				<p className='course-card__authors'>
					<b>Authors:</b> {authors}
				</p>
				<p>
					<b>Duration:</b> {formatTime(duration)} hours
				</p>
				<p>
					<b>Created:</b> {creationDate}
				</p>
				<Button buttonText={SHOW_COURSE} buttonClass={'course-card__button'} />
			</div>
		</article>
	);
}

export default CourseCard;
