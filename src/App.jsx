import './App.css';

import React, { useState, useEffect } from 'react';

import { Header, Courses, CreateCourse } from './components';

import { AppContext } from './helpers';
import { mockedCoursesList, mockedAuthorsList } from './constants';

function App() {
	const [view, setView] = useState(true);
	const [courseList, setCourseList] = useState([]);
	const [authorsList, setAuthorsList] = useState([]);

	const toggleView = () => setView(!view);

	useEffect(() => {
		setCourseList(mockedCoursesList);
		setAuthorsList(mockedAuthorsList);
	}, []);

	return (
		<AppContext.Provider
			value={{
				toggleView,
				courseList,
				setCourseList,
				authorsList,
				setAuthorsList,
				view,
				setView,
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
