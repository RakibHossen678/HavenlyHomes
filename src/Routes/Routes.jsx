import { createBrowserRouter } from "react-router-dom";
import MaiLayout from "../Layour/MaiLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Register from "../Components/Register";
import Login from "../Components/Login";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <MaiLayout></MaiLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/profile',
            element:<Profile></Profile>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);
  export default router