import React, { useContext, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import MessageBox from "./MessageBox";
import NewChannel from "./NewChannel";
import ChannelMenu from "./ChannelMenu";
import { UserContext } from "../context/user";
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
          <Login />
          <Signup />
        </div>
      ) : (
        <div>
          <Logout />

          <MessageBox />
          <NewChannel />
          <ChannelMenu />
        </div>
      )}
    </>
  );
}
export default Dashboard;
