import './Header.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Logo, UserName } from './components';
import { Button } from '../../common';
import { LOGOUT } from '../../constants';
import { getUser } from '../../selectors';

function Header() {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		navigate('/login');
	};

	return (
		<>
			<header className='header'>
				<div className='header_wrapper'>
					<Logo />
					<UserName />
					{user.isAuth && (
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
