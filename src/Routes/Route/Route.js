import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import About from "../../Pages/About/About/About";
import AddTuition from "../../Pages/Dashboard/AddTuition/AddTuition";
import AllApplications from "../../Pages/Dashboard/AllApplications/AllApplications";
import Applications from "../../Pages/Dashboard/Applications/Applications";
import MyApplications from "../../Pages/Dashboard/MyApplications/MyApplications";
import Home from "../../Pages/Home/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import Tuitions from "../../Pages/Tuitions/Tuitions/Tuitions";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Login from "../../Shared/Login/Login/Login";
import SignUp from "../../Shared/Login/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import StudentRoute from "../StudentRoute/StudentRoute";
import TutorRoute from "../TutorRoute/TutorRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile/:email',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/profile/${params.email}`)
            },
            {
                path: '/tuitions',
                element: <PrivateRoute><Tuitions></Tuitions></PrivateRoute>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allApplications',
                element: <TutorRoute><AllApplications></AllApplications></TutorRoute>
            },
            {
                path: '/myApplications',
                element: <TutorRoute><MyApplications></MyApplications></TutorRoute>
            },
            {
                path: '/addTuition',
                element: <StudentRoute><AddTuition></AddTuition></StudentRoute>
            }, {
                path: '/applications/:id',
                element: <StudentRoute><Applications></Applications></StudentRoute>,
                loader:  ({ params }) => fetch(`http://localhost:5000/allApplications/${params.id}`)
            },
        ]
    }
])

export default router;