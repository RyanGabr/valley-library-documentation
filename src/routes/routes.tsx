import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "@/pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
