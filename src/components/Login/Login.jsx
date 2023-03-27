import './Login.css';

import React, { useState, useContext } from 'react';

import { Input, Button } from '../../common';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../helpers';

import { LOGIN } from '../../constants';
import { postRequest } from '../../helpers';

function Login() {
	const { setIsLoggedIn } = useContext(AppContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleChange =
		(setter) =>
		({ target: { value } }) => {
			setter(value);
		};

	const handleChangeEmail = handleChange(setEmail);
	const handleChangePassword = handleChange(setPassword);

	const login = async (e) => {
		e.preventDefault();
		let auth = JSON.parse(localStorage.getItem('authData'))?.token;
		if (!email || !password) {
			return;
		} else if (auth) {
			setIsLoggedIn(true);
			navigate('/courses');
		} else {
			const userData = {
				email: email,
				password: password,
			};

			let { result, user } = await postRequest(
				'/login',
				userData,
				'User is not registered. Please register'
			);
			let authData = { token: result, user: user };
			localStorage.setItem('authData', JSON.stringify(authData));
			setIsLoggedIn(true);
			navigate('/courses');
		}
	};

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
