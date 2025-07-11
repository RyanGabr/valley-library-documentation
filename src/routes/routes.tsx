import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "@/pages/home";
import { Home as HomePage } from "@/pages/docs/home";
import { Developers } from "@/pages/docs/developers";
import { LayoutDocs } from "@/pages/docs/layout";
import { Introduction } from "@/pages/docs/introduction";
import { Benefits } from "@/pages/docs/benefits";
import { FrontEnd } from "@/pages/docs/front-end";
import { BackEnd } from "@/pages/docs/back-end";
import { Database } from "@/pages/docs/database";
import { Search } from "@/pages/docs/search";
import { BookDetails } from "@/pages/docs/book-details";
import { Buy } from "@/pages/docs/buy";
import { Account } from "@/pages/docs/account";
import { Management } from "@/pages/docs/management";
import { CreateAccount } from "@/pages/docs/create-account";
import { Login } from "@/pages/docs/login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/developers",
    element: <Developers />,
  },
  {
    path: "/docs",
    element: <LayoutDocs />,
    children: [
      {
        index: true,
        element: <Navigate to="introduction" replace />,
      },
      {
        path: "introduction",
        element: <Introduction />,
      },
      {
        path: "benefits",
        element: <Benefits />,
      },
      {
        path: "front-end",
        element: <FrontEnd />,
      },
      {
        path: "back-end",
        element: <BackEnd />,
      },
      {
        path: "database",
        element: <Database />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "book-details",
        element: <BookDetails />,
      },
      {
        path: "buy",
        element: <Buy />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "management",
        element: <Management />,
      },
      {
        path: "create-account",
        element: <CreateAccount />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
