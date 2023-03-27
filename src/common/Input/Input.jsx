import './Input.css';

function Input(props) {
	const {
		labelText,
		className,
		placeholderText,
		inputName,
		inputMinLen,
		inputType,
		isRequired,
		inputPattern,
		inputData,
		getInputData,
	} = props;

	return (
		<>
			<label className={`${className}__label`}>
				{labelText}
				<input
					className={`input-field ${className}__input`}
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
