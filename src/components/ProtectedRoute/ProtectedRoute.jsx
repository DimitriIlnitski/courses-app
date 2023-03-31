import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors';
function ProtectedRoute({ children }) {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	useEffect(() => {
		if (!user.isAuth || user.isAuth === undefined) navigate('/login');
	}, []);

	return children;
}

export default ProtectedRoute;
