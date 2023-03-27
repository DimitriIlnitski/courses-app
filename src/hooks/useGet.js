import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useGet = (url) => {
	const [items, setItems] = useState([]);

	const getItems = useCallback(async () => {
		try {
			const response = await axios.get(url);
			const items = response.data;
			setItems(items);
			console.log('Data:', items);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}, [url]);

	useEffect(() => {
		getItems();
	}, [url, getItems]);
	return { items };
};
