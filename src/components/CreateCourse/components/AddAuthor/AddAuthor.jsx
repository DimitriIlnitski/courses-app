import './AddAuthor.css';
import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

function AddAuthor(props) {
	return (
		<div>
			<h2 className='add-author__title'>Add author</h2>
			<form onSubmit={props.createAuthor}>
				<Input
					labelText={'Author name'}
					labelClass={'add-author__label'}
					placeholderText={'Enter author name...'}
					minLength={2}
					getParams={props.newAuthorName}
				/>
				<Button buttonText={'Create author'} />
			</form>
		</div>
	);
}

export default AddAuthor;
