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
	// const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
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
				isLoggedIn,
				setIsLoggedIn,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Container />}>
						<Route path='register' element={<Registration />} />
						<Route path='login' element={<Login />} />
						<Route path='courses' element={<Courses />} />
						<Route path='courses/add' element={<CreateCourse />} />
						<Route path='courses/:id' element={<CourseInfo />} />
						<Route path='*' element={<div>Path not resolved</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
