import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main.jsx';
import Home from './pages/Homepage/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },{
        path: '/login',
        element: <Login></Login>
      },{
        path: '/register',
        element: <SingUp></SingUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-6xl mx-auto'>
   <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
 </div>
)
