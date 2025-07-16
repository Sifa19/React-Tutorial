import ReactDOM from "react-dom/client";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Filter from "./components/Filter";
import AboutUs from "./components/AboutUs";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/atomic/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <ContactUs />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
