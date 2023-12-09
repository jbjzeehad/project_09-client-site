import { useContext } from "react";
import { AuthCon } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthCon);
    if (user) {
        return children;
    }
    return (
        <Navigate to='/signin' state={location.pathname}></Navigate>
    );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}