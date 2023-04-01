import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthorized }) {
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuthorized) navigate('/login');
	}, []);

	return children;
}

export default ProtectedRoute;
