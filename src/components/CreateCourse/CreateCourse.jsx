import './CreateCourse.css';

import React, { useState, useContext } from 'react';

import { Button, Input } from '../../common';
import { AuthorTile, Description, AddAuthor, Duration } from './components';

import { v4 as uuidv4 } from 'uuid';

import { formatDate, AppContext } from '../../helpers';
import {
	ADD_NEW_COURSE,
	ADD_AUTHOR,
	DELETE_AUTHOR,
	CANCEL,
} from '../../constants';

function CreateCourse() {
	const { courseList, setCourseList, authorsList, setView } =
		useContext(AppContext);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const handleChange =
		(setter) =>
		({ target: { value } }) => {
			setter(value);
		};

	const handleChangeTitle = handleChange(setTitle);
	const handleChangeDescription = handleChange(setDescription);
	const handleChangeDuration = handleChange(setDuration);

	const createCourse = (e) => {
		e.preventDefault();
		if (
			title === '' ||
			description === '' ||
			duration <= 0 ||
			courseAuthors.length === 0
		) {
			alert('Please, fill in all fields');
		} else {
			let authList = courseAuthors.map((item) => item.id);
			setCourseList([
				...courseList,
				{
					id: uuidv4(),
					title,
					description,
					duration,
					creationDate: formatDate(new Date()),
					authors: authList,
				},
			]);
			setTitle('');
			setDescription('');
			setDuration('');
			setView(true);
			setCourseAuthors([]);
		}
	};
	const cancel = () => {
		setView(true);
	};

	const AuthorList = ({
		authors,
		buttonInfo,
		courseAuthors,
		setCourseAuthors,
		availableAuthors,
		setAvailableAuthors,
	}) => {
		return (
			<ul className='create-course__list'>
				{authors.length === 0 ? (
					<li className='create-course__list--empty'>Author list is empty</li>
				) : (
					authors.map((author) => (
						<AuthorTile
							key={author.id}
							author={author}
							buttonInfo={buttonInfo}
							courseAuthors={courseAuthors}
							setCourseAuthors={setCourseAuthors}
							availableAuthors={availableAuthors}
							setAvailableAuthors={setAvailableAuthors}
						/>
					))
				)}
			</ul>
		);
	};

	return (
		<main className='main'>
			<div className='main__wrapper'>
				<form className='create-course' onSubmit={createCourse}>
					<div className='create-course__title-wrapper'>
						<div>
							<Input
								labelText={'Title'}
								className={'create-course'}
								placeholderText={'  Enter title...'}
								inputName={'title'}
								isRequired={true}
								inputData={title}
								getInputData={handleChangeTitle}
							/>
						</div>
						<Button
							buttonClass={'create-course__top-button-create'}
							buttonText={ADD_NEW_COURSE}
							buttonType={'submit'}
						/>
						<Button
							buttonClass={'create-course__top-button-cancel'}
							buttonText={CANCEL}
							onClickHandler={cancel}
						/>
					</div>
					<Description
						inputData={description}
						getInputData={handleChangeDescription}
					/>
					<div className='create-course__fieldset'>
						<div>
							<AddAuthor
								availableAuthors={availableAuthors}
								setAvailableAuthors={setAvailableAuthors}
								isRequired={true}
							/>
							<Duration
								inputData={duration}
								getInputData={handleChangeDuration}
								isRequired={true}
							/>
						</div>
						<div>
							<h2 className='create-course__title'>Authors</h2>
							{
								<AuthorList
									authors={availableAuthors}
									buttonInfo={ADD_AUTHOR}
									courseAuthors={courseAuthors}
									setCourseAuthors={setCourseAuthors}
									availableAuthors={availableAuthors}
									setAvailableAuthors={setAvailableAuthors}
								/>
							}
							<div className='create-course__title'>Course authors</div>
							<AuthorList
								authors={courseAuthors}
								buttonInfo={DELETE_AUTHOR}
								courseAuthors={courseAuthors}
								setCourseAuthors={setCourseAuthors}
								availableAuthors={availableAuthors}
								setAvailableAuthors={setAvailableAuthors}
							/>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
}

export default CreateCourse;
