import './Duration.css';
import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import formatTime from '../../../../helpers/formatTime';

function Duration() {
	const [time, setTime] = useState();
	const getParams = (time) => setTime(time);
	return (
		<div>
			<h2 className='duration__title'>Duration</h2>
			<Input
				labelText={'Duration'}
				labelClass={'duration__label'}
				placeholderText={'Enter duration in minutes...'}
				getParams={getParams}
			/>
			<p>Duration: {formatTime(time)} hours</p>
		</div>
	);
}

export default Duration;
