import { createBrowserRouter } from "react-router-dom";
import Client_Layout from "./Layouts/Client_Layout";
import Home from "./Pages/Home";
import Property from './Pages/Property';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client_Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "property",
        element: <Property />
      }
    ],
  },
]);

export default router;
