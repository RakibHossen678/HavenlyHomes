import { createBrowserRouter } from "react-router-dom";
import MaiLayout from "../Layour/MaiLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Register from "../Components/Register";
import Login from "../Components/Login";
import EstateDetails from "../Components/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MaiLayout></MaiLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/resident.json"),
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/resident.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      }
    ],
  },
]);
export default router;
