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
import ProLogin from '../Pages/ProLogin/ProLogin'
import MyPatients from '../Pages/MyPatients/MyPatients'
import Patient from '../Pages/Patient/Patient'
import ProDashboard from '../Layout/ProDashboard/ProDashboard'

const checkAuth = () => {
  return !localStorage.getItem('token') ? redirect('/login') : null
}
const checkPro = () => {
  console.log(localStorage.getItem('rol'))
  return (localStorage.getItem('rol') !== 'professional') ? redirect('/login') : null
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
    path: '/prologin',
    element: <ProLogin />
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
  {
    path: '/prodashboard',
    element: <ProDashboard />,
    loader: checkPro,
    children: [
      {
        path: '/prodashboard/MyPatients',
        element: <MyPatients />,
        loader: checkPro
      },
      {
        path: '/prodashboard/Patient',
        element: <Patient />,
        loader: checkPro
      },
    ]
  },


])