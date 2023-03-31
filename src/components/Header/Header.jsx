import './Header.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Logo, UserName } from './components';
import { Button } from '../../common';
import { LOGOUT } from '../../constants';
import { getUser } from '../../selectors';
import { logoutUser } from '../../store/user/actionCreators';

function Header() {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logout = async () => {
		let authToken = localStorage.getItem('authData');
		dispatch(logoutUser(authToken));
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
