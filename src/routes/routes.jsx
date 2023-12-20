import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: "",
      },
    ],
  },
]);

export default router;
