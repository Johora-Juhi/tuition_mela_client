import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Login from "../../Shared/Login/Login/Login";
import SignUp from "../../Shared/Login/SignUp/SignUp";


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
            // {
            //     path: '/category/:id',
            //     element: <PrivateRoute><ProductCategory></ProductCategory></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://assignment-twelve-server-six.vercel.app/category/${params.id}`)
            // // },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
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