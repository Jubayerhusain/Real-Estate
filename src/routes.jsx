import { createBrowserRouter } from "react-router-dom";
import Client_Layout from "./Layouts/Client_Layout";
import Home from "./Pages/Home";
import Property from "./Pages/Property";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

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
        element: <Property />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
