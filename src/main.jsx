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
        element: <AddCar></AddCar>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/details/:brand_name',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/carcards/${params.brand_name}`)
      },
      {
        path: '/updatecar/:id',
        element: <UpdateCar></UpdateCar>,
        loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
      },
      {
        path:'/cardetails/:id',
        element: <CarDetail></CarDetail>,
        loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
