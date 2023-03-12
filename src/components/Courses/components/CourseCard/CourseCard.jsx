import React from 'react';
import Button from '../../../../common/Button/Button';

function CourseCard(props) {
	const { title, description, creationDate, duration, authors } = props;
	return (
		<article>
			<div>
				<h6>{title}</h6>
				<p>{description}</p>
			</div>
			<div>
				<p>Authors: {authors}</p>
				<p>Duration: {duration} </p>
				<p>Created: {creationDate}</p>
				<Button buttonText={'Show course'} />
			</div>
		</article>
	);
}

export default CourseCard;
