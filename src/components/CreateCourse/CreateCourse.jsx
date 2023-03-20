import './CreateCourse.css';
import React, { useState, useContext } from 'react';
import AppContext from '../../helpers/AppContext';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorTile from './components/AuthorTile/AuthorTile';
import Description from './components/Description/Description';
import { v4 as uuidv4 } from 'uuid';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Duration from './components/Duration/Duration';

function CreateCourse() {
	const { courseList, setCourseList, authorsList, setAuthorsList } =
		useContext(AppContext);
	const [newAuthor, setNewAuthor] = useState('');
	const [course, setCourse] = useState({
		id: '',
		title: '',
		description: ``,
		creationDate: '',
		duration: 0,
		authors: [''],
	});
	const newAuthorName = (params) => {
		console.log(newAuthor);
		setNewAuthor(params);
	};
	const createAuthor = (e) => {
		e.prevetDefault();
		// console.log(newAuthor);
		// setAuthorsList([...authorsList, { id: uuidv4(), name: newAuthor }]);
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
								getParams
							/>
						</div>
						<Button
							buttonClass={'create-course__top-button'}
							buttonText={'Create course'}
						/>
					</div>
					<Description />
					<div className='create-course__fieldset'>
						<div>
							<AddAuthor
								newAuthorName={newAuthorName}
								createAuthor={createAuthor}
							/>
							<Duration />
						</div>
						<div>
							<h2 className='create-course__title'>Authors</h2>
							<ul>
								{authorsList.map((author) => {
									return (
										<AuthorTile
											key={author.id}
											authorName={author.name}
											buttonInfo='Add author'
										/>
									);
								})}
							</ul>
							<div className='create-course__title'>Course authors</div>
							<ul>
								{authorsList.map((author) => {
									return (
										<AuthorTile
											key={author.id}
											authorName={author.name}
											buttonInfo='Delete author'
										/>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default CreateCourse;
