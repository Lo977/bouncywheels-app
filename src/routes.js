import React from "react";
import ErrorPage from "./pages/ErrorPage";
import App from "./pages/App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cars from "./pages/Cars";
import NewCar from "./pages/NewCar";
import UpdateCar from "./pages/UpdateCar";
// import Search from "./pages/Search";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/new_car",
        element: <NewCar />,
      },
      {
        path: "update-car/:id",
        element: <UpdateCar />,
      },
      // {
      //   path: "search",
      //   element: <Search />,
      // },
    ],
  },
];
export default routes;
