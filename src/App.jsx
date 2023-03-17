import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import AppContext from './helpers/AppContext';
import { mockedCoursesList, mockedAuthorsList } from './constants';

function App() {
	const [view, setView] = useState(true);
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const toggleView = () => setView(!view);

	return (
		<AppContext.Provider
			value={{
				toggleView,
				courseList,
				setCourseList,
				authorsList,
				setAuthorsList,
			}}
		>
			<div className='container'>
				<Header />
				{view ? <Courses /> : <CreateCourse />}
			</div>
		</AppContext.Provider>
	);
}

export default App;
