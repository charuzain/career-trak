import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
// import Landing from './pages/Landing/Landing';
import Error from './pages/Error/Error';
import Layout from './pages/Layout/Layout';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';

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
        {
          path: 'register',
          element: <Register />,
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
