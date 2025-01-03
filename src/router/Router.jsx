import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../main/MainLayouts";
import Login from "../components/loginRegister/Login";
import Register from "../components/loginRegister/Register";
import Home from "../pages/Home";
import AddJobes from "../pages/AddJobes";
import Profile from "../pages/Profile ";
import JobDetails from "../components/jobdetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../components/jobapply/JobApply";
import MyApplication from "../pages/MyApplication";
import MyPostJob from "../pages/MyPostJob";
import ViewApplications from "../components/viewApplications/ViewApplications";
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
            element:<PrivetRoute> <AddJobes></AddJobes> </PrivetRoute>,
        },
        {
            path:'/jobs/:id',
            element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
        },
        
        {
          path: '/jobApply/:id',
          element:<PrivetRoute> <JobApply></JobApply> </PrivetRoute>,
        },
        {
          path: '/myPstedJobs',
          element:<PrivetRoute> <MyPostJob></MyPostJob> </PrivetRoute>,
        },
        {
          path: 'viewApplications/:job_id',
          element:<PrivetRoute> <ViewApplications></ViewApplications> </PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
        },
        
        {
            path:'/myApplication',
            element:<PrivetRoute> <MyApplication></MyApplication> </PrivetRoute>,
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