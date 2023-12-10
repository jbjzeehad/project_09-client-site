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
import PrivateRoutes from './component/PrivateRoutes/PrivateRoutes.jsx';
import MyCart from './component/MyCart/MyCart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allshop",
        element: <Shop></Shop>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct')
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
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: "/mycart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/users')
      },
      {
        path: "/nissan",
        element: <Nissan></Nissan>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct')
      },
      {
        path: "/ford",
        element: <Ford></Ford>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct')
      },
      {
        path: "/toyota",
        element: <Toyota></Toyota>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct')
      },
      {
        path: "/bmw",
        element: <BmwCar></BmwCar>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct')
      },
      {
        path: "/audi",
        element: <Audi></Audi>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct')
      },
      {
        path: '/chevrolet',
        element: <Chevrolet></Chevrolet>
      },
      {
        path: '/cardetails/:id',
        element: <PrivateRoutes> <CarDetails></CarDetails></PrivateRoutes>,
        loader: () => fetch('ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct')
      },
      {
        path: "update/:id",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader: ({ params }) => fetch(`ph-brandshop-server-fygonk9lc-jubayers-projects.vercel.app/allproduct/${params.id}`)
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
