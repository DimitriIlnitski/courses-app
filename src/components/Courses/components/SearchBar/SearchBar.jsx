import React from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

function SearchBar(props) {
	return (
		<form className='search-form' onSubmit={props.handleSubmit}>
			<Input placeholdetText={'Enter course name...'} {...props} />
			<Button buttonText={'Search'} />
		</form>
	);
}

export default SearchBar;
