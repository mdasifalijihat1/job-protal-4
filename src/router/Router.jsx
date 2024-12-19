import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../main/MainLayouts";
import Login from "../components/loginRegister/Login";
import Register from "../components/loginRegister/Register";
import Home from "../pages/Home";
import AddJobes from "../pages/AddJobes";
import Myjob from "../pages/Myjob";
import Profile from "../pages/Profile ";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      errorElement: <h2> error page  </h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/addjob',
            element:<AddJobes></AddJobes>,
        },
        {
            path:'/myjob',
            element:<Myjob></Myjob>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
            path:'/profile',
            element:<Profile></Profile>,
        },

      ]
    },

  ]);