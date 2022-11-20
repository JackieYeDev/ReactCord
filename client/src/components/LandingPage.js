import React, { useContext, useState, useEffect } from "react";
import Logout from "./Logout";
import ChannelMenu from "./ChannelMenu";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";
import UserList from "./UserList";
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
    <>
      {user === null ? (
        <div>
          <NavBar />
        </div>
      ) : (
        <div>
          <Logout />
          <UserList />
          <Link to={"/new-channel"}>New Channel</Link>
          <ChannelMenu />
        </div>
      )}
    </>
  );
}
export default LandingPage;
