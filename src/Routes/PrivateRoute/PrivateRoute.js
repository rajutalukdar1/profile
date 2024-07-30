import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children
    }

    if (loading) {


        return (
            <div className="h-screen flex justify-center items-center">
                <ClimbingBoxLoader
                    color="#fda4af" size={30} />
            </div>
        )
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;