import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import { UserProvider } from "./context/user";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewChannel from "./components/NewChannel";
import "bootstrap/dist/css/bootstrap.min.css";
import Channels from "./components/Channels";
import { CableProvider } from "./context/cable";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CableProvider>
        <Route path={"/"} component={App} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/new-channel"} component={NewChannel} />
        <Route path={"/channel/:id"} component={Channels} />
      </CableProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
