import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";

function Logout() {
  const [, setUser] = useContext(UserContext);
  let history = useHistory();
  function onLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(() => console.log("Logged out"))
      .then(() => {
        setUser(null);
        history.push("/");
      })
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
}

export default Logout;
