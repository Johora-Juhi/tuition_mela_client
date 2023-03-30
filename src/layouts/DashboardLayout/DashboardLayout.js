import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useStudent from '../../hooks/useStudent';
import useTutor from '../../hooks/useTutor';
import Navbar from '../../Shared/Navbar/Navbar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isStudent] = useStudent(user?.email);
    const [isTutor] = useTutor(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {isTutor &&
                            <>
                            <li><Link to='/dashboard/myApplications'>My Applications</Link></li>
                            <li><Link to='/dashboard/allApplications'>All Applications</Link></li>
                            </>
                        }
                        
                        {
                            isStudent && <>
                                <li><Link to='/dashboard/addTuition'>Add Tuition</Link></li>
                                <li><Link to='/dashboard/myProducts'>Added Tuition</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;