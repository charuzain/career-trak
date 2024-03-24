import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
// import Landing from './pages/Landing/Landing';
import Error from './pages/Error/Error';
import Layout from './pages/Layout/Layout';
import Landing from './pages/Landing/Landing';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Landing />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
      errorElement: <Error />,
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
