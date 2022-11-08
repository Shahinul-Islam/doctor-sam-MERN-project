import { createBrowserRouter } from "react-router-dom";
import Header from "../../components/Header";
import Services from "../../components/Services";
import Main from "../../layout/Main/Main";

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
    ],
  },
]);

export default router;
