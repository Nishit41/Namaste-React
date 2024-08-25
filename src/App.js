import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { userContext } from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import { Cart } from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);
  // assume this is coming from api
  const fetchUserName = () => setUserName("Nishit");
  useEffect(fetchUserName, []);

  return (
    <Provider store={appStore}>
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {" "}
      <div> 
        <Header />
        {/* {WE ARE USING OUTLET BECAUSE HEADER WILL BE CONSTANT ACROSS ALL THE ROUTES} */}
        <Outlet />
      </div>
    </userContext.Provider>
    </Provider>
  );
};

// the below lines are created to provide routes

// const appRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<AppLayout/>
//   },{
//     path:'/about',
//     element:<About/>,
//   },
//   {
//     path:'/contact',
//     element:<Contact/>,
//   }
// ])

// Routes by children

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // this root.render method is putting into do
