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
