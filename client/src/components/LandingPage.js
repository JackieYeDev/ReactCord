import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Route, useHistory } from "react-router-dom";
import Description from "./Description";
import Login from "./Login";
import Signup from "./Signup";
function LandingPage() {
  const path = useHistory();
  useEffect(() => {
    let head = document.head;
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
    head.appendChild(link);
    return () => {
      head.removeChild(link);
    };
  }, []);
  return (
    <div className={"app"}>
      <NavBar />
      {path.location.pathname === "/" ? <Description /> : null}
      <Route path={"/login"} component={Login}></Route>
      <Route path={"/signup"} component={Signup}></Route>
    </div>
  );
}
export default LandingPage;
