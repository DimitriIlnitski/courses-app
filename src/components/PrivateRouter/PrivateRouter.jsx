import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRouter({ children, isAdmin, isAuthorized }) {
	return isAdmin && isAuthorized ? children : <Navigate to='/courses' />;
}

PrivateRouter.propTypes = {
	children: PropTypes.element,
	isAuthorized: PropTypes.bool,
	isAdmin: PropTypes.string,
};

export default PrivateRouter;
