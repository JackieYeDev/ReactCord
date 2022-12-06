import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { Link, useHistory } from "react-router-dom";
import "../styles/Channel.css";
import logoutSymbol from "../assets/Logout_symbol.png";

function Logout() {
  const [, setUser] = useContext(UserContext);
  let history = useHistory();
  function onLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(() => {
        setUser(null);
        document.cookie = "";
        history.push("/login");
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className={"channelWrapper"}>
      <div className={"channelAvatar"}>
        <img
          src={logoutSymbol}
          className={"channelAvatarImage"}
          height={48}
          width={48}
          alt={"Log out"}
          onClick={() => onLogout()}
        ></img>
      </div>
    </div>
  );
}

export default Logout;
