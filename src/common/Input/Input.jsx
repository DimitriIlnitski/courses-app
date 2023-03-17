import React, { useState } from 'react';

function Input({ labelText, placeholdetText, getParams }) {
	const [data, setData] = useState('');

	return (
		<>
			<label htmlFor='input-field'>{labelText}</label>
			<input
				type='text'
				id='input-field'
				name='input-field'
				placeholder={placeholdetText}
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
