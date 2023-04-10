import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { buttonText, buttonClass, buttonType, onClickHandler } = props;
	return (
		<button
			className={`button ${buttonClass}`}
			type={buttonType || 'button'}
			onClick={onClickHandler}
		>
			{buttonText || ''}
		</button>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string,
	buttonClass: PropTypes.string,
	buttonType: PropTypes.string,
	onClickHandler: PropTypes.func,
};

export default Button;
