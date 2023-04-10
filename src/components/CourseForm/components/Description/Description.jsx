import './Description.css';

import React from 'react';
import PropTypes from 'prop-types';

function Description(props) {
	const { inputData, getInputData } = props;
	return (
		<label className='description__label' htmlFor='textarea'>
			Description
			<textarea
				className='description__textarea'
				name='description'
				placeholder={'  Enter description'}
				minLength={2}
				value={inputData}
				required={true}
				pattern='^[a-zA-Z0-9]{2,}$'
				form='create-course'
				onChange={(e) => {
					getInputData(e);
				}}
			></textarea>
		</label>
	);
}

Description.propTypes = {
	inputData: PropTypes.string,
	getInputData: PropTypes.func,
};

export default Description;
