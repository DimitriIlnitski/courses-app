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
				inputClassName={'duration__input'}
				getParams={getParams}
			/>
			<p className='duration__timer'>
				Duration:
				<span className='duration__timer--fz-bold'> {formatTime(time)} </span>
				hours
			</p>
		</div>
	);
}

export default Duration;
