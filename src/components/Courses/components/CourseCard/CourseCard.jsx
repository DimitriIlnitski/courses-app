import './CourseCard.css';
import React from 'react';
import Button from '../../../../common/Button/Button';

function CourseCard(props) {
	const { title, description, creationDate, duration, authors } = props;
	return (
		<article className='course-card'>
			<div>
				<h6 className='course-card__title'>{title}</h6>
				<p className='course-card__description'>{description}</p>
			</div>
			<div>
				<p>
					<b>Authors:</b> {authors}
				</p>
				<p>
					<b>Duration:</b> {duration}{' '}
				</p>
				<p>
					<b>Created:</b> {creationDate}
				</p>
				<Button buttonText={'Show course'} />
			</div>
		</article>
	);
}

export default CourseCard;
