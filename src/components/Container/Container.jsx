import './Container.css';

import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header.jsx';
import { reLoginUser } from '../../store/user/actionCreators';
import { getUser } from '../../selectors';

function Container() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(getUser);

	useEffect(() => {
		let authToken = localStorage.getItem('authData');
		if (authToken !== null) {
			dispatch(reLoginUser(authToken));
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
