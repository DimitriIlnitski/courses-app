import './Container.css';

import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';

function Container() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/login');
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
