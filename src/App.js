import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body"
import Header from "./components/Header";
import Menu from "./components/Menu";

const Footer = () => {};

const AppLayout = () => (
  <div>
    <Header />
    <Body />
    <Menu/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // this root.render method is putting into do
