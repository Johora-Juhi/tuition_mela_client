import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import AddTuition from "../../Pages/Dashboard/AddTuition/AddTuition";
import Dashboard from "../../Pages/Dashboard/Dasboard/Dashboard";
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
                loader: () => fetch(`http://localhost:5000/tuitions`)
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
                path: '/faq',
                // element: 
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allApplications',
                element: <TutorRoute><MyApplications></MyApplications></TutorRoute>
            },
            {
                path: '/dashboard/addTuition',
                element: <StudentRoute><AddTuition></AddTuition></StudentRoute>
            },
            // {
            //     path: '/dashboard/myTuitions',
            //     element: <StudentRoute><MyTuitions></MyTuitions></StudentRoute>
            // },
        ]
    }
])

export default router;