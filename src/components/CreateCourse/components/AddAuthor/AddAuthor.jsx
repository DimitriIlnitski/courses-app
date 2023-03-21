import './AddAuthor.css';
import React, { useState, useContext } from 'react';
import AppContext from '../../../../helpers/AppContext';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { v4 as uuidv4 } from 'uuid';

function AddAuthor() {
	const { authorsList, setAuthorsList } = useContext(AppContext);

	const [newAuthor, setNewAuthor] = useState('');

	const newAuthorName = (e) => {
		setNewAuthor(e.target.value);
	};

	const createAuthor = (e) => {
		e.preventDefault();
		setAuthorsList([...authorsList, { id: uuidv4(), name: newAuthor }]);
		setNewAuthor('');
	};

	return (
		<div className='add-author'>
			<h2 className='add-author__title'>Add author</h2>
			<form className='add-author__form' onSubmit={createAuthor}>
				<Input
					labelText={'Author name'}
					labelClass={'add-author__label'}
					placeholderText={'  Enter author name...'}
					inputClassName={'add-author__input'}
					inputName='author'
					inputData={newAuthor}
					getInputData={newAuthorName}
				/>
				<Button
					buttonText={'Create author'}
					buttonClass={'add-author__button'}
					buttonType={'submit'}
				/>
			</form>
		</div>
	);
}

export default AddAuthor;
