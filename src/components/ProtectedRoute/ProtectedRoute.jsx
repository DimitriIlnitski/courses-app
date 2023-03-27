import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../helpers';

function ProtectedRoute({ children }) {
	const { isLoggedIn } = useContext(AppContext);
	const navigate = useNavigate();
	if (isLoggedIn) {
		return children;
	} else {
		navigate('/login');
	}
}

export default ProtectedRoute;
