import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import { UserProvider } from "./context/user";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { CableProvider } from "./context/cable";
import Discover from "./components/Discover";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CableProvider>
        <Route path={"/"} component={App} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/discover"} component={Discover} />
      </CableProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
