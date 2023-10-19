import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ErrorPage from "../pages/ErrorPage";
import BrandDetail from "./../pages/BrandDetail";
const url = "http://localhost:8000/";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${url}brands`),
      },
      {
        path: "/AddProduct",
        element: <AddProduct />,
        loader: () => fetch(`${url}brands`),
      },
      {
        path: "/MyCart",
        element: <MyCart />,
      },
      {
        path: "/brandDetail/:id",
        element: <BrandDetail />,
        loader: ({ params }) => fetch(`${url}brands/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export { Router, url };
