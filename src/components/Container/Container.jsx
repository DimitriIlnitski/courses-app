import './Container.css';

import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header.jsx';
import { loginUser } from '../../store/user/actionCreators';

function Container() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		let auth = JSON.parse(localStorage.getItem('authData'));
		if (auth !== null) {
			dispatch(
				loginUser({
					name: auth.name,
					email: auth.email,
					token: auth.token,
				})
			);
			navigate('/courses');
		} else {
			navigate('/login');
		}
	}, []);

	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<div className='main__wrapper'>
					<Outlet />
				</div>
			</main>
		</div>
	);
}

export default Container;
