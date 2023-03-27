import './UserName.css';

import React, { useContext } from 'react';
import { AppContext } from '../../../../helpers';

function UserName() {
	const { isLoggedIn } = useContext(AppContext);
	return isLoggedIn ? (
		<div className='header__user-name'>
			{JSON.parse(localStorage.getItem('authData'))?.user?.name}
		</div>
	) : (
		''
	);
}

export default UserName;
