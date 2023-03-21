import './Description.css';
import React from 'react';

function Description(props) {
	const { inputData, getInputData } = props;
	return (
		<div>
			<label className='description__label' htmlFor='textarea'>
				Description
			</label>
			<textarea
				className='description__textarea'
				name='description'
				placeholder={'  Enter description'}
				minLength={2}
				value={inputData}
				onChange={(e) => {
					getInputData(e);
				}}
			></textarea>
		</div>
	);
}

export default Description;
