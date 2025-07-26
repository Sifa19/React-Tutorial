import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Filter from "./components/Filter";
import AboutUs from "./components/AboutUs";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/atomic/Error";
import RestaruantMenu from "./components/RestaruantMenu";

/* 
Chunking
Code Spliting
Dynamic Bundling
Lazy Loading
On demand loading
Dynamic import
*/

// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import ShimmerCard from "./components/ShimmerCard";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="relative">
      <Header />
      <div className="pt-28">
        <Outlet />
      </div>
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
      {
        path: "/restaurants/:resId",
        element: <RestaruantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
