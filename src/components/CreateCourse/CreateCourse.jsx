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

	const [course, setCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: '',
		authors: [],
	});
	const [courseAuthors, setCourseAuthors] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setCourse({ ...course, [name]: value }); // працює
	};

	const createCourse = (e) => {
		e.preventDefault();
		setCourse((course) => {
			return {
				...course,
				creationDate: new Date(),
				authors: courseAuthors.map((item) => item.id),
			};
		});
		// setCourseList([...courseList, course]);
		// setCourse({
		// 	id: uuidv4(),
		// 	title: '',
		// 	description: '',
		// 	creationDate: '',
		// 	duration: '',
		// 	authors: [],
		// });
		// setView(true);
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
								inputData={course.title}
								getInputData={handleChange}
							/>
						</div>
						<Button
							buttonClass={'create-course__top-button'}
							buttonText={'Create course'}
							onClickHandler={createCourse}
						/>
					</div>
					<Description
						inputData={course.description}
						getInputData={handleChange}
					/>
					<div className='create-course__fieldset'>
						<div>
							<AddAuthor />
							<Duration
								inputData={course.duration}
								getInputData={handleChange}
							/>
						</div>
						<div>
							<h2 className='create-course__title'>Authors</h2>
							<ul>
								{authorsList.map((author) => {
									return (
										<AuthorTile
											key={author.id}
											author={author}
											buttonInfo='Add author'
											courseAuthors={courseAuthors}
											setCourseAuthors={setCourseAuthors}
										/>
									);
								})}
							</ul>
							<div className='create-course__title'>Course authors</div>
							<ul>
								{courseAuthors.map((author) => {
									return (
										<AuthorTile
											key={author.id}
											author={author}
											buttonInfo='Delete author'
											courseAuthors={courseAuthors}
											setCourseAuthors={setCourseAuthors}
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
