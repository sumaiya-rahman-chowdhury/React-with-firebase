import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Component/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import Login from './Component/Login';
import Register from './Component/Register';
import AuthProvider from './Component/AuthProvider';
import Order from './Component/Order';
import ProtectedRoute from './Component/ProtectedRoute';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/reg',
        element: <Register></Register>
      },
      {
        path:'/order',
        element:<ProtectedRoute><Order></Order></ProtectedRoute>
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
