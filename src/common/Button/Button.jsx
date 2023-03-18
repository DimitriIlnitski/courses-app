import './Button.css';
import React from 'react';

const Button = (props) => {
	const { buttonText, onClickHandler, buttonClass } = props;
	const combinedClassNames = `button ${buttonClass}`;
	return (
		<button
			className={combinedClassNames}
			type='submit'
			onClick={onClickHandler}
		>
			{buttonText}
		</button>
	);
};

export default Button;
