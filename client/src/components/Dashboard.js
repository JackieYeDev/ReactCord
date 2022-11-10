import React, { useContext, useEffect } from "react";
import Logout from "./Logout";
import MessageBox from "./MessageBox";
import ChannelMenu from "./ChannelMenu";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";
function Dashboard() {
  const [user, setUser] = useContext(UserContext);
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
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
        </div>
      ) : (
        <div>
          <Logout />
          {/*<MessageBox />*/}
          <Link to={"/new-channel"}>New Channel</Link>
          <ChannelMenu />
        </div>
      )}
    </>
  );
}
export default Dashboard;
