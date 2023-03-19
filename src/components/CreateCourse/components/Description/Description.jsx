import './Description.css';
import React from 'react';

function Description() {
	return (
		<div>
			<label className='description__label' htmlFor='textarea'>
				Description
			</label>
			<textarea
				className='description__textarea'
				type='textarea'
				id='textarea'
				name='textarea'
				placeholder={'Enter duration in minutes...'}
				minLength={2}
			></textarea>
		</div>
	);
}

export default Description;
