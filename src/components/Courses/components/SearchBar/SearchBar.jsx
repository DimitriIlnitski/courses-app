import React from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

function SearchBar(props) {
	return (
		<form className='search-bar' onSubmit={props.handleSubmit}>
			<Input
				labelClass={'search-bar__label'}
				placeholdetText={'Enter course name...'}
				{...props}
			/>
			<Button buttonText={'Search'} />
		</form>
	);
}

export default SearchBar;
