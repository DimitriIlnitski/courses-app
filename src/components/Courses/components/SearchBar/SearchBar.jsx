import './SearchBar.css';

import React from 'react';

import { Input, Button } from '../../../../common';

import { SEARCH } from '../../../../constants';

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

export default SearchBar;
