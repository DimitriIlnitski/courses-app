import axios from 'axios';
export default async function postRequest(path, data, errorMessage) {
	try {
		const response = await axios.post(`http://localhost:4000${path}`, data);
		return response.data;
	} catch (error) {
		alert(errorMessage);
	}
}
