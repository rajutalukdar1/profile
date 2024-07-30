import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className="text-red-500">Something went wrong</p>
            <p className="text-red-500">{error.statusText || error.message}</p>
            <h4>Please <Link onClick={handleLogOut}>Log Out</Link> and ReLogin</h4>
        </div>
    );
};

export default DisplayError;