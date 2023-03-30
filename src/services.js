import axios from 'axios';

export async function getRequest(path) {
	try {
		const response = await axios.get(`http://localhost:4000${path}`);
		return response.data;
	} catch (error) {
		alert('Data download failed');
	}
}

export async function postRequest(path, data, errorMessage) {
	try {
		const response = await axios.post(`http://localhost:4000${path}`, data);
		return response.data;
	} catch (error) {
		alert(errorMessage);
	}
}
