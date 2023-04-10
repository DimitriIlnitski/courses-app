import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoute({ children, isAuthorized }) {
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuthorized) navigate('/login');
	}, []);

	return children;
}

ProtectedRoute.propTypes = {
	children: PropTypes.element,
	isAuthorized: PropTypes.bool,
};

export default ProtectedRoute;
