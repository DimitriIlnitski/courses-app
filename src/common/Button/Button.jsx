import React from 'react';

const Button = (props) => {
	const { buttonText, onClickHandler } = props;
	return <button onClick={onClickHandler}>{buttonText}</button>;
};

export default Button;
