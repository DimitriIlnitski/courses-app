import './Input.css';

function Input(props) {
	const {
		labelText,
		labelClass,
		placeholderText,
		inputName,
		inputClassName,
		inputData,
		getInputData,
	} = props;

	return (
		<>
			<label className={labelClass}>
				{labelText}
				<input
					className={`input-field ${inputClassName}`}
					type='text'
					name={inputName}
					value={inputData}
					placeholder={placeholderText}
					onChange={(e) => {
						getInputData(e);
					}}
				/>
			</label>
		</>
	);
}

export default Input;
