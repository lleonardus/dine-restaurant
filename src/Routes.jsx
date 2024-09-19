import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { Root } from "./pages/root/Root";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
