import { createBrowserRouter } from "react-router-dom";
import AddService from "../../components/AddService";
import Blogs from "../../components/Blogs";
import Header from "../../components/Header";
import Login from "../../components/Login";
import MyReviews from "../../components/MyReviews";
import ServiceDetails from "../../components/ServiceDetails";
import Services from "../../components/Services";
import SignUP from "../../components/SignUP";
import Main from "../../layout/Main/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUP></SignUP>,
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
