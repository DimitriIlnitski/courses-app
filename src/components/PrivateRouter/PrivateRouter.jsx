import { Navigate } from 'react-router-dom';

function PrivateRouter({ children, isAdmin, isAuthorized }) {
	return isAdmin && isAuthorized ? children : <Navigate to='/courses' />;
}

export default PrivateRouter;
