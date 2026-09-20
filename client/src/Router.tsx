import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import MyInventoryPage from "./pages/MyInventoryPage/MyInventoryPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/item/:id", 
        element: <ItemDetailsPage /> 
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