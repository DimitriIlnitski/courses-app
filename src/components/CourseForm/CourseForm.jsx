import './CourseForm.css';

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Input } from '../../common';
import { AuthorTile, Description, AddAuthor, Duration } from './components';

import { v4 as uuidv4 } from 'uuid';

import { formatDate, getAuthorsList } from '../../helpers';
import { getAuthors, getCourses } from '../../selectors';
import {
	ADD_NEW_COURSE,
	ADD_AUTHOR,
	DELETE_AUTHOR,
	CANCEL,
	UPDATE_COURSE,
} from '../../constants';
import { addCourse, updateCourse } from '../../store/courses/actionCreators';

function CourseForm({ update }) {
	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);

	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	useEffect(() => {
		if (update) {
			let course = coursesList.find((item) => item.id === id);
			setTitle(course.title);
			setDescription(course.description);
			setDuration(course.duration);
			let filteredCourseAuthors = availableAuthors.filter((item) =>
				course.authors.includes(item.id)
			);
			setCourseAuthors(filteredCourseAuthors);
			let courseAuthorsIds = filteredCourseAuthors.map((item) => item.id);
			let filteredAvailableAuthors = availableAuthors.filter(
				(item) => !courseAuthorsIds.includes(item.id)
			);
			setAvailableAuthors(filteredAvailableAuthors);
		}
	}, []);

	const handleChange =
		(setter) =>
		({ target: { value } }) => {
			setter(value);
		};

	const handleChangeTitle = handleChange(setTitle);
	const handleChangeDescription = handleChange(setDescription);
	const handleChangeDuration = handleChange(setDuration);

	const handleCourse = (e) => {
		e.preventDefault();

		if (
			title === '' ||
			description === '' ||
			duration <= 0 ||
			courseAuthors.length === 0
		) {
			alert('Please, fill in all fields');
		} else if (update === false) {
			let authList = courseAuthors.map((item) => item.id);
			let newCourse = {
				title,
				description,
				duration: Number(duration),
				creationDate: formatDate(new Date()),
				authors: authList,
			};
			dispatch(addCourse(newCourse));
			setTitle('');
			setDescription('');
			setDuration('');
			setCourseAuthors([]);
			navigate('/courses');
		} else if (update === true) {
			let course = coursesList.find((item) => item.id === id);
			let authList = courseAuthors.map((item) => item.id);
			let updatedCourse = {
				id,
				title,
				description,
				duration: Number(duration),
				authors: authList,
				creationDate: course.creationDate,
			};
			dispatch(updateCourse(updatedCourse));
			navigate('/courses');
		}
	};
	const cancel = () => {
		navigate('/courses');
	};

	const renderAuthorList = (authors, buttonInfo) => (
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
	return (
		<>
			<form className='create-course' onSubmit={handleCourse}>
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
						buttonText={update ? UPDATE_COURSE : ADD_NEW_COURSE}
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
						{renderAuthorList(availableAuthors, ADD_AUTHOR)}
						<div className='create-course__title'>Course authors</div>
						{renderAuthorList(courseAuthors, DELETE_AUTHOR)}
					</div>
				</div>
			</form>
		</>
	);
}

export default CourseForm;
