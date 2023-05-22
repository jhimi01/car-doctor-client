import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
      return  <progress className="progress progress-info w-3/4 mx-auto bg-slate-200"></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;