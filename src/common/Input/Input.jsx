import './Input.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

function Input({
	labelText,
	labelClass,
	placeholdetText,
	widthInput,
	idInput,
	getParams,
}) {
	const [data, setData] = useState('');
	const inputIdentification = idInput || uuidv4();
	const inputWidthIdentification = widthInput || '20rem';
	return (
		<div className='input-warpper'>
			<label className={labelClass} htmlFor={inputIdentification}>
				{labelText}
			</label>
			<input
				type='text'
				id={inputIdentification}
				name={inputIdentification}
				placeholder={placeholdetText}
				width={inputWidthIdentification}
				value={data}
				onChange={(e) => {
					setData(e.target.value);
					getParams(e.target.value);
				}}
			/>
		</div>
	);
}

export default Input;
