import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayouts/MainLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import Register from "./Components/Pages/Register/Register.jsx";
import Blog from "./Components/Pages/Blog/Blog.jsx";
import Error from "./Components/Pages/Share/Error/Error.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ToyDetails from "./Components/ToysCategory/ToyDetails.jsx";
import AddToys from "./Components/Pages/AddToys/AddToys.jsx";
import AllToys from "./Components/Pages/AllToys/AllToys.jsx";
import Mytoys from "./Components/Pages/MyToys/Mytoys.jsx";
import UpdateToys from "./Components/Pages/UpdateToys/UpdateToys.jsx";
import PrivetRouter from "./PrivetRouter/PrivetRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivetRouter>
            {" "}
            <ToyDetails></ToyDetails>
          </PrivetRouter>
        ),
        // http://localhost:5000
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addtoys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/addAToy",
        element: <AddToys></AddToys>,
      },
      {
        path: "allToys",
        element: (
          <PrivetRouter>
            {" "}
            <AllToys></AllToys>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivetRouter>
            <Mytoys></Mytoys>
          </PrivetRouter>
        ),
      },
      {
        path: "/addtoys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addtoys/${params.id}`),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
