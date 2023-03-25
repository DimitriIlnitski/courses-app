import './Header.css';

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo, UserName } from './components';
import { Button } from '../../common';
import { AppContext } from '../../helpers';
import { LOGOUT } from '../../constants';

function Header() {
	const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('authData');
		setIsLoggedIn(false);
		navigate('/login');
	};

	return (
		<>
			<header className='header'>
				<div className='header_wrapper'>
					<Logo />
					<UserName />
					{isLoggedIn && (
						<Button
							onClickHandler={logout}
							buttonText={LOGOUT}
							buttonClass={'header__button'}
						/>
					)}
				</div>
			</header>
		</>
	);
}

export default Header;
