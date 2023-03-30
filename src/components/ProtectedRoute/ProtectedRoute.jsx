import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors';
function ProtectedRoute({ children }) {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	useEffect(() => {
		let auth = JSON.parse(localStorage.getItem('authData'));
		if (auth === null) {
			navigate('/login');
		}
	}, []);

	return user.isAuth && children;
}

export default ProtectedRoute;
