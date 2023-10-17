import { createBrowserRouter } from "react-router-dom";
import App from './../App';
const url = "hi"

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
  ]);

export {Router, url};
