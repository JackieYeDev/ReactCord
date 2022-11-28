import React, { useContext, useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LandingPage.css";
import Logout from "./Logout";
import SideBar from "./SideBar";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
function LandingPage() {
  const [user, setUser] = useContext(UserContext);
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

  return (
    <div className={"app"}>
      <NavBar />
    </div>
  );
}
export default LandingPage;
