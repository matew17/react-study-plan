import { Navigate, createBrowserRouter } from "react-router-dom";

import { Dashboard } from "../pages/dashboard";
import { Home } from "../pages/home";
import { Layout } from "../pages/Layout";
import { Login } from "../pages/login";
import { ProtectedRoute } from "./protected";

export const router = (isLoggedIn) =>
  createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate replace to="home" />,
        },
        {
          element: <ProtectedRoute isAllowed={!!isLoggedIn} />,
          children: [
            { path: "/home", element: <Home /> },
            { path: "/dashboard", element: <Dashboard /> },
          ],
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <h1>404, Page not found</h1>,
    },
  ]);
