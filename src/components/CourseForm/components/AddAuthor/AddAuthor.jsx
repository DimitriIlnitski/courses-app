import './AddAuthor.css';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '../../../../common';

import { CREATE_AUTHOR } from '../../../../constants';
import { getAuthors } from '../../../../selectors';

import { addAuthor } from '../../../../store/authors/actionCreators';

function AddAuthor(props) {
	const dispatch = useDispatch();
	const allAuthors = useSelector(getAuthors);

	const { availableAuthors, setAvailableAuthors } = props;
	const [newAuthor, setNewAuthor] = useState('');

	const newAuthorName = ({ target: { value } }) => {
		setNewAuthor(value);
	};

	const createAuthor = async () => {
		if (new RegExp('^[A-Z][a-zA-Z]{2,}$', 'g').test(newAuthor)) {
			let newObj = { name: newAuthor };
			await dispatch(addAuthor(newObj));
		} else {
			alert(
				'Please enter name of new author, which should start with capital letter'
			);
		}
	};

	useEffect(() => {
		setAvailableAuthors([...allAuthors]);
		setNewAuthor('');
	}, [allAuthors]);

	return (
		<div className='add-author'>
			<h2 className='add-author__title'>Add author</h2>
			<div className='add-author__form'>
				<Input
					labelText={'Author name'}
					className={'add-author'}
					placeholderText={'  Enter author name...'}
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
