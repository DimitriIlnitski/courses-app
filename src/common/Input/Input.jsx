import './Input.css';

function Input(props) {
	const {
		labelText,
		labelClass,
		placeholderText,
		inputName,
		inputClassName,
		inputMinLen,
		inputType,
		isRequired,
		inputPattern,
		inputData,
		getInputData,
	} = props;

	return (
		<>
			<label className={labelClass}>
				{labelText}
				<input
					className={`input-field ${inputClassName}`}
					type={inputType || 'text'}
					name={inputName}
					value={inputData}
					placeholder={placeholderText}
					minLength={inputMinLen}
					required={isRequired || false}
					pattern={inputPattern}
					onChange={(e) => {
						getInputData(e);
					}}
				/>
			</label>
		</>
	);
}

export default Input;
