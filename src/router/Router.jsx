import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
const url = "hi";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AddProduct",
        element: <AddProduct />,
      },
      {
        path: "/MyCart",
        element: <MyCart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export { Router, url };
