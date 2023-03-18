import './CreateCourse.css';
import React, { useState, useContext } from 'react';
import AppContext from '../../helpers/AppContext';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorTile from './components/AuthorTile';

function CreateCourse() {
	const { courseList, setCourseList, authorsList, setAuthorsList } =
		useContext(AppContext);
	const [courseAuthors, setCourseAuthors] = useState([{}]);
	const [course, setCourse] = useState({
		id: '',
		title: '',
		description: ``,
		creationDate: '',
		duration: 0,
		authors: [''],
	});

	return (
		<section className='main'>
			<div className='main__wrapper'>
				<form className='create-course'>
					<div className='create-course__title-wrapper'>
						<Input
							labelText={'Title'}
							labelClass={'create-course__label'}
							placeholdetText={'Enter title...'}
							getParams
						/>
						<Button
							buttonClass={'create-course__top-button'}
							buttonText={'Create course'}
						/>
					</div>
					<div>
						<label className='create-course__label' htmlFor='textarea'>
							Description
						</label>
						<textarea
							className='create-course__textarea'
							type='textarea'
							id='textarea'
							name='textarea'
							placeholdetText={'Enter duration in minutes...'}
							minLength={2}
						></textarea>
					</div>
					<fieldset className='create-course__fieldset'>
						<div>
							<h2 className='create-course__title'>Add author</h2>
							<Input
								labelText={'Author name'}
								labelClass={'create-course__label'}
								placeholdetText={'Enter author name...'}
								getParams
							/>
							<Button buttonText={'Create author'} />
							<h2 className='create-course__title'>Duration</h2>
							<Input
								labelText={'Duration'}
								labelClass={'create-course__label'}
								placeholdetText={'Enter duration in minutes...'}
								getParams
							/>
							<p>Duration: {} hours</p>
						</div>
						<div>
							<h2 className='create-course__title'>Authors</h2>
							<ul>
								{authorsList.map((author) => {
									return (
										<AuthorTile
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
											authorName={author.name}
											buttonInfo='Delete author'
										/>
									);
								})}
							</ul>
						</div>
					</fieldset>
				</form>
			</div>
		</section>
	);
}

export default CreateCourse;
