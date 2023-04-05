import axios from 'axios';

export async function getRequest(path) {
	try {
		const response = await axios.get(`http://localhost:4000${path}`);
		return response.data;
	} catch (error) {
		alert('Data download failed');
	}
}

// User fetch functions
export async function loginAndRegistrationRequest(path, data) {
	try {
		const response = await axios.post(`http://localhost:4000${path}`, data);
		return response.data;
	} catch (error) {
		if (data === '/login') {
			alert('Login failed');
		} else {
			alert('User have not been registered');
		}
	}
}

export async function getUserRequest(token) {
	try {
		const response = await axios.get('http://localhost:4000/users/me', {
			headers: {
				Authorization: `${token}`,
			},
		});
		return response.data.result;
	} catch (error) {
		alert('Login failed');
	}
}

export async function logoutRequest(token) {
	try {
		const response = await axios.delete(`http://localhost:4000/logout`, {
			headers: {
				Authorization: `${token}`,
			},
		});
		return response.data;
	} catch (error) {
		alert('Logout failed');
	}
}

// Course fetch functions

export async function addCourseRequest(course, token) {
	try {
		const response = await axios.post(
			`http://localhost:4000/courses/add`,
			course,
			{
				headers: {
					Authorization: `${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		alert('Adding of course failed');
	}
}

export async function deleteCourseRequest(id, token) {
	try {
		const response = await axios.delete(`http://localhost:4000/courses/${id}`, {
			headers: {
				Authorization: `${token}`,
			},
		});
		return response.data;
	} catch (error) {
		alert('Course have not been deleted');
	}
}

export async function updateCourseRequest(data, token) {
	try {
		const response = await axios.put(
			`http://localhost:4000/courses/${data.id}`,
			data,
			{
				headers: {
					Authorization: `${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		alert('Course have not been updated');
	}
}

// Authors fetch functions

export async function addAuthorRequest(author, token) {
	try {
		const response = await axios.post(
			`http://localhost:4000/authors/add`,
			author,
			{
				headers: {
					Authorization: `${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		alert('Adding of author failed');
	}
}
