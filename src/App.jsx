import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
	Container,
	Courses,
	CreateCourse,
	Login,
	Registration,
	CourseInfo,
} from './components';

import { AppContext } from './helpers';
import { mockedCoursesList, mockedAuthorsList } from './constants';

function App() {
	const [user, setUser] = useState(null);
	const [courseList, setCourseList] = useState([]);
	const [authorsList, setAuthorsList] = useState([]);

	useEffect(() => {
		setCourseList(mockedCoursesList);
		setAuthorsList(mockedAuthorsList);
	}, []);

	return (
		<AppContext.Provider
			value={{
				courseList,
				setCourseList,
				authorsList,
				setAuthorsList,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Container />}>
						<Route path='register' element={<Registration />} />
						<Route path='login' element={<Login />} />
						<Route path='courses' element={<Courses />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
