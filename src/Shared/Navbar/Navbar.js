import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { VscChevronDown } from "react-icons/vsc";
import useStudent from "../../hooks/useStudent";
import useTutor from "../../hooks/useTutor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isStudent] = useStudent(user?.email);
  const [isTutor] = useTutor(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error("error", error));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tuitions">Tuitions</Link>
      </li>
      {user?.uid ? 
        <>
          {isTutor && 
            <>
              <li>
                <Link to="/myApplications">My Applications</Link>
              </li>
              <li>
                <Link to="/allApplications">All Applications</Link>
              </li>
              
            </>
          
          }

          {isStudent && (
            <>
              <li>
                <Link to="/addTuition">Add Tuition</Link>
              </li>
            </>
          )
          }
        </>
       : 
        <></>
      }
    </React.Fragment>
  );
  return (
    <div className="navbar border-b border-sky-900 mx-0 lg:px-10 mb-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-stone-700"
          >
            {menuItems}
          </ul>
        </div>
        <h1 className="text-3xl text-sky-900 font-bold pl-3 mb-2">
          tuition<span className="text-accent">Mela</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold text-gray-400">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? 
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="text-accent font-bold">
                {/* {user?.displayName} */}
                Account
                <VscChevronDown className="inline"></VscChevronDown>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <Link to={`/profile/${user?.email}`}>Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogOut} variant="primary">
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </>
         : 
          <>
            <Link className="text-light" to="/login">
              <button
                className="btn btn-accent rounded-none text-slate-50 ml-2 mr-2 my-2"
                variant="primary"
              >
                Log in
              </button>
            </Link>
            <Link className="text-light hidden lg:inline" to="/signUp">
              <button
                className="btn btn-accent btn-outline rounded-none text-slate-50 my-2"
                variant="primary"
              >
                Register
              </button>
            </Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
