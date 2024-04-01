import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
// import Landing from './pages/Landing/Landing';
import Error from './pages/Error/Error';
import Layout from './pages/Layout/Layout';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import DashBoardLayout from './pages/DashBoardLayout/DashBoardLayout';
import AddJobs from './pages/AddJobs/AddJobs';
import AllJobs from './pages/AllJobs/AllJobs';
import Stats from './pages/Stats/Stats';
import Profile from './pages/Profile/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: '/dashboard',
          element: <DashBoardLayout />,
          children: [
            {
              index: true,
              element: <AddJobs />,
            },
            {
              path: 'addJobs',
              element: <AddJobs />,
            },
            {
              path: 'allJobs',
              element: <AllJobs />,
            },
            {
              path: 'stats',
              element: <Stats />,
            }, {
              path: 'profile',
              element : <Profile/>
            }
          ],
        },
      ],
    },
    // {
    //   path: '/login',
    //   element: <Login />,
    // },
  ]);

  return (
    <>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
