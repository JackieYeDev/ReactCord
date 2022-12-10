import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
function LandingPage() {
  const [, setUser] = useContext(UserContext);
  const [userList, setUserList] = useState([]);
  // const cable = ActionCable.createConsumer("ws://localhost:3000/cable");
  // const createSubscription = () => {
  //   cable.subscriptions.create(
  //     { channel: "UserChannel" },
  //     {
  //       connected: () => console.log("Connected"),
  //       disconnected: () => console.log("Disconnected"),
  //       received: (data) => {
  //         console.log(data);
  //         setUserList([...userList, data]);
  //       },
  //     }
  //   );
  // };
  // useEffect(() => {
  //   createSubscription();
  // }, []);

  useEffect(() => {
    fetch("/me", {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((response) => {
            setUser(response);
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

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
      {/*<section className={"py-5 text-center container"}>*/}
      {/*  <div className={"row py-lg-5"}>*/}
      {/*    <div className={"col-lg-6 col-md-8 mx-auto"}>*/}
      {/*      <h1 className={"fw-light"}>Welcome to ReactCord</h1>*/}
      {/*      <p className={"lead text-muted"}>To get started, please login!</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
}
export default LandingPage;
