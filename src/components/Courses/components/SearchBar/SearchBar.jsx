import './SearchBar.css';
import React from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

function SearchBar(props) {
	const { handleSubmit } = props;
	return (
		<form className='search-bar' onSubmit={handleSubmit}>
			<Input placeholdetText={'Enter course name...'} {...props} />
			<Button
				buttonText={'Search'}
				buttonClass={'search-bar__button'}
				buttonType={'submit'}
			/>
		</form>
	);
}

export default SearchBar;
