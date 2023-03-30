import './UserName.css';

import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../../selectors';

function UserName() {
	const user = useSelector(getUser);
	return user.isAuth ? (
		<div className='header__user-name'>{user.name}</div>
	) : (
		''
	);
}

export default UserName;
