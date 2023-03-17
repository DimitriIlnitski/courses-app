import './Header.css';
import React from 'react';
import Logo from './components/Logo/Logo';
import UserName from './components/UserName/UserName';
import Button from '../../common/Button/Button';

function Header() {
	return (
		<header className='header'>
			<div className='header_wrapper'>
				<Logo />
				<UserName />
				<Button buttonText={'Logout'} />
			</div>
		</header>
	);
}

export default Header;
