import './Container.css';

import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header.jsx';
import { reLoginUser } from '../../store/user/actionCreators';

function Container() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const refresh = async () => {
			dispatch(reLoginUser(authToken));
			navigate('/courses');
		};

		let authToken = localStorage.getItem('authData');
		if (authToken !== null) {
			refresh();
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
