import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import { UserProvider } from "./context/user";
import { ActionCableProvider } from "react-actioncable-provider";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewChannel from "./components/NewChannel";
import "bootstrap/dist/css/bootstrap.min.css";
import Channels from "./components/Channels";

ReactDOM.render(
  <ActionCableProvider url={"ws://localhost:3000/cable"}>
    <BrowserRouter>
      <UserProvider>
        <Route path={"/"} component={App} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/new-channel"} component={NewChannel} />
        <Route path={"/channel/:id"} component={Channels} />
      </UserProvider>
    </BrowserRouter>
  </ActionCableProvider>,
  document.getElementById("root")
);
