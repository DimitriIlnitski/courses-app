import React from 'react';
import Logo from './components/Logo/Logo';
import Name from './components/Logo/Name';
import Button from '../../common/Button/Button';

function Header() {
	return (
		<>
			<Logo />
			<Name />
			<Button buttonText={'Logout'} />
		</>
	);
}

export default Header;
