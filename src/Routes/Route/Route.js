import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Login from "../../Shared/Login/Login/Login";
import SignUp from "../../Shared/Login/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     errorElement: <DisplayError></DisplayError>,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <Dashboard></Dashboard>
    //         },
    //         {
    //             path: '/dashboard/myorders',
    //             element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
    //         },
    //         // {
    //         //     path: '/dashboard/payment/:id',
    //         //     element: <MakePayment></MakePayment>,
    //         //     loader: ({ params }) => fetch(`https://assignment-twelve-server-six.vercel.app/myorders/${params.id}`)
    //         // },
    //         {
    //             path: '/dashboard/allsellers',
    //             element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/allbuyers',
    //             element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/reportedItems',
    //             element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/addProducts',
    //             element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
    //         },
    //         {
    //             path: '/dashboard/myProducts',
    //             element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
    //         },
    //     ]
    // }
])

export default router;