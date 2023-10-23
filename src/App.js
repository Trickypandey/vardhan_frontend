import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'reactstrap';
import Base from './component/Base';
import ErrorPage from "./pages/error-page";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import About from './pages/about';
import AddCustomer from './pages/AddCustomer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/addcustomer",
    element: <AddCustomer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  }
])


function App() {
  return ( 
    <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
