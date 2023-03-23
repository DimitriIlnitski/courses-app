import './Header.css';

import React from 'react';

import { Logo, UserName } from './components';
import { Button } from '../../common';
import { LOGOUT } from '../../constants';

function Header() {
	return (
		<header className='header'>
			<div className='header_wrapper'>
				<Logo />
				<UserName />
				<Button buttonText={LOGOUT} buttonClass={'header__button'} />
			</div>
		</header>
	);
}

export default Header;
