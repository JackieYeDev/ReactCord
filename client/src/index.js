import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import { UserProvider } from "./context/user";
import { CableProvider } from "./context/cable";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CableProvider>
        <Route path={"/"} component={App} />
      </CableProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
