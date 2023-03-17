import './Button.css';
import React from 'react';

const Button = (props) => {
	const { buttonText, onClickHandler } = props;
	return (
		<button type='submit' className='button-style' onClick={onClickHandler}>
			{buttonText}
		</button>
	);
};

export default Button;
