import { createBrowserRouter } from "react-router-dom";
import Header from "../../components/Header";
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
    ],
  },
]);

export default router;
