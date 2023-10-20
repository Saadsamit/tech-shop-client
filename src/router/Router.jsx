import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ErrorPage from "../pages/ErrorPage";
import BrandDetail from "./../pages/BrandDetail";
import CardDetail from "../pages/CardDetail";
import UpdateProduct from "../pages/UpdateProduct";
import PriveteRouter from "./PriveteRouter";
const url = "https://tech-shop-seven.vercel.app/";

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
        element: (
          <PriveteRouter>
            <AddProduct />
          </PriveteRouter>
        ),
        loader: () => fetch(`${url}brands`),
      },
      {
        path: "/MyCart",
        element: (
          <PriveteRouter>
            <MyCart />
          </PriveteRouter>
        ),
        loader: () => fetch(`${url}cardData`),
      },
      {
        path: "/brandDetail/:id",
        element: (
          <PriveteRouter>
            <BrandDetail />
          </PriveteRouter>
        ),
        loader: ({ params }) => fetch(`${url}brands/${params.id}`),
      },
      {
        path: "/cardDetail/:id",
        element: (
          <PriveteRouter>
            <CardDetail />
          </PriveteRouter>
        ),
        loader: ({ params }) => fetch(`${url}Item/${params.id}`),
      },
      {
        path: "/UpdateProduct/:id",
        element: (
          <PriveteRouter>
            <UpdateProduct />
          </PriveteRouter>
        ),
        loader: ({ params }) => fetch(`${url}Item/${params.id}`),
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
