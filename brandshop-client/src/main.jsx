import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import SignIn from './component/SignIn/SignIn.jsx';
import Update from './component/Update/Update.jsx';
import AddProduct from './component/AddProduct/AddProduct.jsx';
import Shop from './component/Shop/Shop.jsx';
import Nissan from './component/Nissan/Nissan.jsx';
import Ford from './component/Ford/Ford.jsx';
import BmwCar from './component/BmwCar/BmwCar.jsx';
import Toyota from './component/Toyota/Toyota.jsx';
import Chevrolet from './component/Chevrolet/Chevrolet.jsx';
import Audi from './component/Audi/Audi.jsx';
import CarDetails from './component/CarDetails/CarDetails.jsx';
import AuthProviders from './component/Providers/AuthProviders';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/allshop",
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:5000/allproduct')
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/nissan",
        element: <Nissan></Nissan>,
        loader: () => fetch('http://localhost:5000/allproduct')
      },
      {
        path: "/ford",
        element: <Ford></Ford>,
        loader: () => fetch('http://localhost:5000/allproduct')
      },
      {
        path: "/toyota",
        element: <Toyota></Toyota>,
        loader: () => fetch('http://localhost:5000/allproduct')
      },
      {
        path: "/bmw",
        element: <BmwCar></BmwCar>,
        loader: () => fetch('http://localhost:5000/allproduct')
      },
      {
        path: "/audi",
        element: <Audi></Audi>,
        loader: () => fetch('http://localhost:5000/allproduct')
      },
      {
        path: '/chevrolet',
        element: <Chevrolet></Chevrolet>
      },
      {
        path: '/cardetails/:id',
        element: <CarDetails></CarDetails>,
        loader: () => fetch('http://localhost:5000/allproduct')
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
