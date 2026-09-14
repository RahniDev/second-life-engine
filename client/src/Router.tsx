import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/items",
    element: <ItemsPage />,
  },
  {
    path: "/add-item",
    element: <AddItemPage />,
  },
]);