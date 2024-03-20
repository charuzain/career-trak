import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router ={router} />
    </>
  );
}

export default App;
