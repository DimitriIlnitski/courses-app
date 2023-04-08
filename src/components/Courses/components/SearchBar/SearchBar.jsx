import './SearchBar.css';

import React from 'react';

import { Input, Button } from '../../../../common';

import { SEARCH } from '../../../../constants';

import PropTypes from 'prop-types';

function SearchBar(props) {
	const { handleSubmit } = props;
	return (
		<form className='search-bar' onSubmit={handleSubmit}>
			<Input placeholdetText={'Enter course name...'} {...props} />
			<Button
				buttonText={SEARCH}
				buttonClass={'search-bar__button'}
				buttonType={'submit'}
			/>
		</form>
	);
}

SearchBar.propTypes = {
	handleSubmit: PropTypes.func,
};

export default SearchBar;
