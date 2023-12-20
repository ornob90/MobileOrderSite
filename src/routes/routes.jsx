import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Detail from "../pages/Details/Detail";
import Cart from "../pages/Cart/Cart";
import Favorite from "../pages/Favorite/Favorite";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
