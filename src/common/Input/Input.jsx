import './Input.css';
import PropTypes from 'prop-types';

function Input(props) {
	const {
		testData,
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
					data-testid={testData || ''}
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

Input.propTypes = {
	testData: PropTypes.string,
	labelText: PropTypes.string,
	className: PropTypes.string,
	placeholderText: PropTypes.string,
	inputName: PropTypes.string,
	inputMinLen: PropTypes.number,
	inputType: PropTypes.string,
	isRequired: PropTypes.bool,
	inputPattern: PropTypes.string,
	inputData: PropTypes.string,
	getInputData: PropTypes.func,
};

export default Input;
