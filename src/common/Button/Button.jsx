import './Button.css';
import React from 'react';

const Button = (props) => {
	const { buttonText, onClickHandler, buttonClass } = props;
	return (
		<button
			className={`button ${buttonClass}`}
			type='submit'
			onClick={onClickHandler}
		>
			{buttonText}
		</button>
	);
};

export default Button;
