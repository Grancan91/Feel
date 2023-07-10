import { createBrowserRouter, redirect } from 'react-router-dom'
import Welcome from '../Pages/Welcome/Welcome'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
  {
    path: '/login',
    element: <Login />
  },

 /*    {
      path: '/',
      element: <LayoutMain />,
      errorElement: <NotFound />,
      children: [
        { path: '/login', element: <Login />, loader: checkLogin },
        { path: '/signup', element: <Signup /> },
      ],
    },
    {
      path: '/home',
      element: <LayoutMain />,
      loader: checkAuth,
      errorElement: <NotFound />,
      children: [
        { path: '/home/dashboard', element: <Dashboard />, loader: checkAuth },
        { path: '/home/myProfile', element: <MyProfile />, loader: checkAuth },
        { path: '/home/createAsadero', element: <CreateAsadero /> },
        { path: '/home/manageAsadero', element: <ManageAsaderoPage /> },
        { path: '/home/upcomingAsadero', element: <UpcomingBBQpage /> },
        { path: '/home/friends', element: <Friends /> },
        { path: '/home/abel', element: <Abel /> },
        { path: '/home/products', element: <CategoriesNProducts /> },
        { path: '/home/aboutUs', element: <MeetTeam /> },
      ],
    }, */
  ])