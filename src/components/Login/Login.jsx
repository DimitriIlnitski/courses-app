import './Login.css';

import React, { useState } from 'react';

import { Input, Button } from '../../common';
import { LOGIN } from '../../constants';
import { Link } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange =
		(setter) =>
		({ target: { value } }) => {
			setter(value);
		};

	const handleChangeEmail = handleChange(setEmail);
	const handleChangePassword = handleChange(setPassword);

	const login = () => {};

	return (
		<form className='login' onSubmit={login}>
			<h1 className='login__title'>Login</h1>
			<Input
				labelText={'Email'}
				className={'login'}
				placeholderText={'  Enter email'}
				inputName={'email'}
				inputType={'email'}
				isRequired={true}
				inputData={email}
				getInputData={handleChangeEmail}
			/>
			<Input
				labelText={'Password'}
				className={'login'}
				placeholderText={'  Enter password'}
				inputName={'password'}
				inputType={'password'}
				isRequired={true}
				inputData={password}
				getInputData={handleChangePassword}
			/>

			<Button
				buttonClass={'login__button'}
				buttonText={LOGIN}
				buttonType={'submit'}
			/>
			<div className='login__link'>
				If you do not have an account you can do&nbsp;
				<Link to='/register'>Registration</Link>
			</div>
		</form>
	);
}

export default Login;
