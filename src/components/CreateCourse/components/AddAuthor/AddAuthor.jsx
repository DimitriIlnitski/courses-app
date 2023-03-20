import './AddAuthor.css';
import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

function AddAuthor(props) {
	return (
		<div className='add-author'>
			<h2 className='add-author__title'>Add author</h2>
			<form className='add-author__form' onSubmit={props.createAuthor}>
				<Input
					labelText={'Author name'}
					labelClass={'add-author__label'}
					placeholderText={'  Enter author name...'}
					inputClassName={'add-author__input'}
					minLength={2}
					getParams={props.newAuthorName}
				/>
				<Button
					buttonText={'Create author'}
					buttonClass={'add-author__button'}
				/>
			</form>
		</div>
	);
}

export default AddAuthor;
