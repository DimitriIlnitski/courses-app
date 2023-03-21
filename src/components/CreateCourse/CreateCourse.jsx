import './CreateCourse.css';
import React, { useState, useContext } from 'react';
import AppContext from '../../helpers/AppContext';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorTile from './components/AuthorTile/AuthorTile';
import Description from './components/Description/Description';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Duration from './components/Duration/Duration';
import { v4 as uuidv4 } from 'uuid';

function CreateCourse() {
	const { courseList, setCourseList, authorsList, setAuthorsList, setView } =
		useContext(AppContext);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const handleChangeTitle = (e) => {
		const value = e.target.value;
		setTitle(value);
	};
	const handleChangeDescription = (e) => {
		const value = e.target.value;
		setDescription(value);
	};
	const handleChangeDuration = (e) => {
		const value = e.target.value;
		setDuration(value);
	};

	const createCourse = (e) => {
		e.preventDefault();
		let authList = courseAuthors.map((item) => item.id);
		console.log(authList);
		setCourseList([
			...courseList,
			{
				id: uuidv4(),
				title,
				description,
				duration,
				creationDate: new Date().toLocaleString(),
				authors: authList,
			},
		]);
		setTitle('');
		setDescription('');
		setDuration('');
		setView(true);
		setCourseAuthors([]);
	};

	return (
		<main className='main'>
			<div className='main__wrapper'>
				<div className='create-course'>
					<div className='create-course__title-wrapper'>
						<div>
							<Input
								labelText={'Title'}
								labelClass={'create-course__label'}
								placeholderText={'  Enter title...'}
								inputName={'title'}
								inputData={title}
								getInputData={handleChangeTitle}
							/>
						</div>
						<Button
							buttonClass={'create-course__top-button'}
							buttonText={'Create course'}
							onClickHandler={createCourse}
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
							/>
							<Duration
								inputData={duration}
								getInputData={handleChangeDuration}
							/>
						</div>
						<div>
							<h2 className='create-course__title'>Authors</h2>
							<ul className='create-course__list'>
								{availableAuthors.length === 0 ? (
									<li className='create-course__list--empty'>
										Author list is empty
									</li>
								) : (
									availableAuthors.map((author) => {
										return (
											<AuthorTile
												key={author.id}
												author={author}
												buttonInfo='Add author'
												courseAuthors={courseAuthors}
												setCourseAuthors={setCourseAuthors}
												availableAuthors={availableAuthors}
												setAvailableAuthors={setAvailableAuthors}
											/>
										);
									})
								)}
							</ul>
							<div className='create-course__title'>Course authors</div>
							<ul className='create-course__list'>
								{courseAuthors.length === 0 ? (
									<li className='create-course__list--empty'>
										Author list is empty
									</li>
								) : (
									courseAuthors.map((author) => {
										return (
											<AuthorTile
												key={author.id}
												author={author}
												buttonInfo='Delete author'
												courseAuthors={courseAuthors}
												setCourseAuthors={setCourseAuthors}
												availableAuthors={availableAuthors}
												setAvailableAuthors={setAvailableAuthors}
											/>
										);
									})
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default CreateCourse;
