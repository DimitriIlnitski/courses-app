import './Container.css';

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

function Container() {
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
