import './AddAuthor.css';

import React, { useState, useContext } from 'react';

import { Button, Input } from '../../../../common';

import { AppContext } from '../../../../helpers';
import { CREATE_AUTHOR } from '../../../../constants';

import { v4 as uuidv4 } from 'uuid';

function AddAuthor(props) {
	const { authorsList, setAuthorsList } = useContext(AppContext);

	const { availableAuthors, setAvailableAuthors } = props;
	const [newAuthor, setNewAuthor] = useState('');

	const newAuthorName = ({ target: { value } }) => {
		setNewAuthor(value);
	};

	const createAuthor = () => {
		if (newAuthor.length >= 2) {
			let newObj = { id: uuidv4(), name: newAuthor };
			setAuthorsList([...authorsList, newObj]);
			setAvailableAuthors([...availableAuthors, newObj]);
			setNewAuthor('');
		}
	};

	return (
		<div className='add-author'>
			<h2 className='add-author__title'>Add author</h2>
			<div className='add-author__form'>
				<Input
					labelText={'Author name'}
					labelClass={'add-author__label'}
					placeholderText={'  Enter author name...'}
					inputClassName={'add-author__input'}
					inputName='author'
					inputMinLen={2}
					inputData={newAuthor}
					getInputData={newAuthorName}
				/>
				<Button
					buttonText={CREATE_AUTHOR}
					buttonClass={'add-author__button'}
					onClickHandler={createAuthor}
				/>
			</div>
		</div>
	);
}

export default AddAuthor;
