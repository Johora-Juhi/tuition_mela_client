import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.error('error', error))
    // }

    

    return (
        <div className="navbar border-b border-sky-900 mx-0 lg:px-10 mb-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>Faq</Link></li>
                    </ul>
                </div>
                {/* <img style={{ width: '35px', marginLeft: '20px' }} src={Logo} alt="" /> */}
                    <h1 className='text-3xl text-sky-900 font-bold pl-3 mb-2'>tuition<span className=''>Mela</span></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/faq'>Faq</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <div className='mr-2'>
                 <Toggle></Toggle> 
                </div> */}
                {/* {
                    user?.uid ?
                        <>
                            <button className='btn btn-error text-slate-50 my-2' onClick={handleLogOut} variant="primary">Log out</button>
                            <div>
                                {
                                    user?.photoURL ?
                                        <div title={user.displayName} className="avatar ml-3">
                                            <div className="w-8 rounded-full">
                                                <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>
                                        :
                                        <FaUserCircle style={{ fontSize: '30px' }} title={user.displayName} className='ml-3 mt-1 text-red-400' />
                                }
                            </div>
                        </>
                        :
                        <>
                            <Link className='text-light' to='/login'><button className='btn btn-accent rounded-none text-slate-50 ml-2 mr-2 my-2' variant="primary">Log in</button></Link>
                            <Link className='text-light hidden lg:inline' to='/signUp'><button className='btn btn-accent btn-outline rounded-none text-slate-50 my-2' variant="primary">Register</button></Link>
                        </>
                } */}

            </div>
        </div>
    );
};

export default Navbar;