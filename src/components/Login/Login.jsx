import './Login.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, Button } from '../../common';
import { Link, useNavigate } from 'react-router-dom';

import { LOGIN } from '../../constants';
import { loginUser } from '../../store/user/actionCreators';

function Login() {
	const dispatch = useDispatch();

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
		if (!email || !password) {
			return;
		} else {
			const userData = {
				email: email,
				password: password,
			};

			await dispatch(loginUser('/login', userData));
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
