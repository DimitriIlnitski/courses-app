import './Logo.css';

import React from 'react';

import epamImage from '../../../../assets/image/epam-logo-primary.png';

const Logo = () => {
	return <img className='header__logo' src={epamImage} alt='logo'></img>;
};

export default Logo;
