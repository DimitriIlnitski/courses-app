import './Button.css';
import React from 'react';

const Button = (props) => {
	const { buttonText, buttonClass, buttonType, onClickHandler } = props;
	return (
		<button
			className={`button ${buttonClass}`}
			type={buttonType || 'button'}
			onClick={onClickHandler}
		>
			{buttonText}
		</button>
	);
};

export default Button;
