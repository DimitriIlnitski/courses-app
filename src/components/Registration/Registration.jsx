import './Registration.css';

import React, { useState } from 'react';

import { Input, Button } from '../../common';
import { REGISTRATION } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';

import { postRequest } from '../../services';

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleChange =
		(setter) =>
		({ target: { value } }) => {
			setter(value);
		};

	const handleChangeName = handleChange(setName);
	const handleChangeEmail = handleChange(setEmail);
	const handleChangePassword = handleChange(setPassword);

	const register = async (e) => {
		e.preventDefault();
		if (!name || !email || !password) return;

		const newUser = {
			name: name,
			email: email,
			password: password,
		};

		postRequest('/register', newUser, 'User have not been registered');

		navigate('/login');
	};

	return (
		<form className='registration' onSubmit={register}>
			<h1 className='registration__title'>Registration</h1>
			<Input
				labelText={'Name'}
				className={'registration'}
				placeholderText={'  Enter name'}
				inputName={'name'}
				isRequired={true}
				inputData={name}
				getInputData={handleChangeName}
			/>
			<Input
				labelText={'Email'}
				className={'registration'}
				placeholderText={'  Enter email'}
				inputName={'email'}
				inputType={'email'}
				isRequired={true}
				inputData={email}
				getInputData={handleChangeEmail}
			/>
			<Input
				labelText={'Password'}
				className={'registration'}
				placeholderText={'  Enter password'}
				inputName={'password'}
				inputType={'password'}
				isRequired={true}
				inputData={password}
				getInputData={handleChangePassword}
			/>

			<Button
				buttonClass={'registration__button'}
				buttonText={REGISTRATION}
				buttonType={'submit'}
			/>
			<div className='registration__link'>
				If you have an account you can <Link to='/login'>Login</Link>
			</div>
		</form>
	);
}

export default Registration;
