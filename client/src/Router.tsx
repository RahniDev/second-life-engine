import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/core/HomePage";
import AddItemPage from "./pages/core/AddItemPage";
import MyInventoryPage from "./pages/core/MyInventoryPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-item",
        element: <AddItemPage />,
      },
      {
        path: "/my-inventory",
        element: <MyInventoryPage />,
      }
    ]
  }
]);