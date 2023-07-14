import { createBrowserRouter, redirect } from 'react-router-dom'
import Welcome from '../Pages/Welcome/Welcome'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'
import Intro1 from '../Pages/Intro1/Intro1'
import Intro2 from '../Pages/Intro2/Intro2'
import Dashboard from '../Layout/Dashboard/Dashboard'
import NewRecord from '../Pages/NewRecord/NewRecord'
import Record from '../Pages/Record/Record'
import SavedRecord from '../Pages/SavedRecord/SavedRecord'
import Home from '../Pages/Home/Home'

const checkAuth = () => {
  return !localStorage.getItem('token') ? redirect('/login') : null
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/intro1',
    element: <Intro1 />,
    loader: checkAuth
  },
  {
    path: '/intro2',
    element: <Intro2 />,
    loader: checkAuth
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    loader: checkAuth,
    children: [
      {
        path: '/dashboard/home',
        element: <Home />,
        loader: checkAuth
      },
      {
        path: '/dashboard/Record',
        element: <Record />,
        loader: checkAuth
      },
      {
        path: '/dashboard/NewRecord',
        element: <NewRecord />,
        loader: checkAuth
      },
      {
        path: '/dashboard/SavedRecord',
        element: <SavedRecord />,
        loader: checkAuth
      },
    ]
  },

])