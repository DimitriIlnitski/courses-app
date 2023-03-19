import './Input.css';
import React, { useState } from 'react';

function Input({
	labelText,
	labelClass,
	placeholderText,
	inputName,
	getParams,
}) {
	const [data, setData] = useState('');
	return (
		<>
			<label className={labelClass} htmlFor={'input-field '}>
				{labelText}
			</label>

			<input
				className='input-field'
				type='text'
				id={'input-field'}
				name={inputName}
				placeholder={placeholderText}
				value={data}
				onChange={(e) => {
					setData(e.target.value);
					getParams(e.target.value);
				}}
			/>
		</>
	);
}

export default Input;
