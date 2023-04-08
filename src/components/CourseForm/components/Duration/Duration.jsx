import './Duration.css';

import React from 'react';

import { Input } from '../../../../common';

import { formatTime } from '../../../../helpers';
import PropTypes from 'prop-types';

function Duration(props) {
	const { inputData, getInputData, isRequired } = props;
	return (
		<div>
			<h2 className='duration__title'>Duration</h2>
			<Input
				labelText={'Duration'}
				className={'duration'}
				placeholderText={'Enter duration in minutes...'}
				inputName={'duration'}
				inputData={inputData}
				getInputData={getInputData}
				inputType={'number'}
				inputPattern={'^[1-9]{1,}$'}
				isRequired={isRequired}
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

Duration.propTypes = {
	inputData: PropTypes.string,
	getInputData: PropTypes.func,
	isRequired: PropTypes.bool,
};

export default Duration;
