import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./Layout/Layout";
import { routes } from "../routes";

const HomePage = lazy(() => import("../pages/Home/Home"));
const CatalogPage = lazy(() => import("../pages/Catalog/Catalog"));
const FavoritesPage = lazy(() => import("../pages/Favorites/Favorites"));

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: routes.HOME,
        element: <Layout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: routes.CATALOG,
            element: <CatalogPage />,
          },
          {
            path: routes.FAVORITES,
            element: <FavoritesPage />,
          },
          {
            path: "*",
            element: <Navigate to={routes.HOME} />,
          },
        ],
      },
    ],
    {
      basename: "/campervan-rent/",
    }
  );

  return <RouterProvider router={router} />;
};

export default App;
