import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getRequest } from './services';

import {
	Container,
	Courses,
	CreateCourse,
	Login,
	Registration,
	CourseInfo,
	ProtectedRoute,
} from './components';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		async function getInitialData() {
			let courseFetch = await getRequest('/courses/all');
			let authorsFetch = await getRequest('/authors/all');
			dispatch({ type: 'GET_COURSES', payload: courseFetch.result });
			dispatch({ type: 'GET_AUTHORS', payload: authorsFetch.result });

			let auth = JSON.parse(localStorage.getItem('authData'));
			if (auth !== null) {
				dispatch({
					type: 'LOGIN',
					payload: {
						name: auth.name,
						email: auth.email,
						token: auth.token,
					},
				});
			}
		}
		getInitialData();
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Container />}>
					<Route path='register' element={<Registration />} />
					<Route path='login' element={<Login />} />
					<Route
						path='courses'
						element={
							<ProtectedRoute>
								<Courses />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/add'
						element={
							<ProtectedRoute>
								<CreateCourse />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/:id'
						element={
							<ProtectedRoute>
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
