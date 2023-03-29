import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useStudent from '../../hooks/useStudent';
import Loading from '../../Shared/Loading/Loading';



const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isStudent, isStudentLoading]=useStudent(user?.email);
    const location = useLocation();
    if (loading || isStudentLoading) {
        return <Loading></Loading>
    }
    if (user && isStudent) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default StudentRoute;