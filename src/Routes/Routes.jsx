import { createBrowserRouter } from "react-router-dom";
import MaiLayout from "../Layour/MaiLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Register from "../Components/Register";
import Login from "../Components/Login";
import EstateDetails from "../Components/EstateDetails";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <MaiLayout></MaiLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/resident.json')
        },
        {
            path:'/estate/:id',
            element:<EstateDetails></EstateDetails>,
            loader:()=>fetch('/resident.json')
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