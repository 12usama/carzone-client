import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import AddCar from './Components/AddCar.jsx';
import MyCart from './Components/MyCart.jsx';
import Login from './Components/Login.jsx';
import Details from './Details';
import UpdateCar from './UpdateCar';
import CarDetail from './CarDetail';
import SignUp from './Components/SignUp';
import AuthProvider from './Components/providers/AuthProvider';
import PrivateRoute from './Components/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/addCars',
        element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
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
        path: '/details/:brand_name',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://carzone-server-eta.vercel.app/carcards/${params.brand_name}`)
      },
      {
        path: '/updatecar/:id',
        element: <UpdateCar></UpdateCar>,
        loader: ({params}) => fetch(`https://carzone-server-eta.vercel.app/car/${params.id}`)
      },
      {
        path:'/cardetails/:id',
        element: <CarDetail></CarDetail>,
        loader: ({params}) => fetch(`https://carzone-server-eta.vercel.app/car/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
