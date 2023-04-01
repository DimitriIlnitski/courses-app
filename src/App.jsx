import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from './selectors';
import { getCourses } from './store/courses/actionCreators';
import { getAuthors } from './store/authors/actionCreators';
import {
	Container,
	Courses,
	CourseForm,
	Login,
	Registration,
	CourseInfo,
	ProtectedRoute,
	PrivateRouter,
} from './components';

function App() {
	const dispatch = useDispatch();
	const { isAuth, role } = useSelector(getUser);

	useEffect(() => {
		dispatch(getCourses());
		dispatch(getAuthors());
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Container />}>
					<Route path='register' element={<Registration />} />
					<Route path='login' element={<Login />} />
					<Route
						path='courses'
						element={
							<ProtectedRoute isAuthorized={isAuth}>
								<Courses />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/add'
						element={
							<PrivateRouter isAuthorized={isAuth} isAdmin={role}>
								<CourseForm update={false} />
							</PrivateRouter>
						}
					/>
					<Route
						path='courses/update/:id'
						element={
							<PrivateRouter isAuthorized={isAuth} isAdmin={role}>
								<CourseForm update={true} />
							</PrivateRouter>
						}
					/>
					<Route
						path='courses/:id'
						element={
							<ProtectedRoute isAuthorized={isAuth}>
								<CourseInfo />
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<div>Path not resolved</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
