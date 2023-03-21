import './Duration.css';
import React from 'react';
import Input from '../../../../common/Input/Input';
import formatTime from '../../../../helpers/formatTime';

function Duration(props) {
	const { inputData, getInputData } = props;
	return (
		<div>
			<h2 className='duration__title'>Duration</h2>
			<Input
				labelText={'Duration'}
				labelClass={'duration__label'}
				placeholderText={'Enter duration in minutes...'}
				inputClassName={'duration__input'}
				inputName={'duration'}
				inputData={inputData}
				getInputData={getInputData}
			/>
			<p className='duration__timer'>
				Duration:
				<span className='duration__timer--fz-bold'>
					{formatTime(inputData)}
				</span>
				hours
			</p>
		</div>
	);
}

export default Duration;
