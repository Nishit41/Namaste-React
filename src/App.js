import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body"
import Header from "./components/Header";
import Menu from "./components/Menu";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Footer = () => {};

const AppLayout = () => (
  <div>
    <Header />
    {/* {WE ARE USING OUTLET BECAUSE HEADER WILL BE CONSTANT ACROSS ALL THE ROUTES} */}
    <Outlet />
  </div>
);

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
    path:'/',
    element:<AppLayout/>,
    children:[{
      path:'/',
      element:<Body/>,
    },{
     path:'/about',
     element:<About/>, 
    },{
      path:'/contact',
      element:<Contact/>,
    },{
      path:'/menu',
      element:<Menu/>,
    },
  ]
  }
 ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); // this root.render method is putting into do
