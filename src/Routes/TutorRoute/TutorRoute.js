import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTutor from '../../hooks/useTutor';
import Loading from '../../Shared/Loading/Loading';



const TutorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isTutor, isTutorLoading]=useTutor(user?.email);
    const location = useLocation();
    if (loading || isTutorLoading) {
        return <Loading></Loading>
    }
    if (user && isTutor) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default TutorRoute;