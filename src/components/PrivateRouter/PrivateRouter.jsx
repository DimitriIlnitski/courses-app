import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../selectors';

function PrivateRouter({ children }) {
	const user = useSelector(getUser);

	return user.role === 'admin' ? children : <Navigate to='/courses' />;
}

export default PrivateRouter;
