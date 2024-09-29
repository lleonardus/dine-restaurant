import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { ErrorPage } from "./ui/ErrorPage";
import { Homepage } from "./pages/homepage/Homepage";
import { Booking } from "./pages/booking/Booking";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
