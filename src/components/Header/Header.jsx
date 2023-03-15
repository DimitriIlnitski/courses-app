import './Header.css';
import React from 'react';
import Logo from './components/Logo/Logo';
import UserName from './components/UserName/UserName';
import Button from '../../common/Button/Button';

function Header() {
	return (
		<header className='header'>
			<Logo />
			<UserName />
			<Button buttonText={'Logout'} />
		</header>
	);
}

export default Header;
