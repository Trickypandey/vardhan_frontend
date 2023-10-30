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
import CustomerDashBoard from './pages/CustomerDashBoard';
import UserDashboard from './pages/UserDashboard';
import AddUserForm from './pages/AddUser';


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
    path: "/customer/addcustomer",
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
  },
  {
    path: "/customer",
    element: <CustomerDashBoard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/adduser",
    element: <AddUserForm />,
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
