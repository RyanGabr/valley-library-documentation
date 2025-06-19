import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: []
  },
]);
