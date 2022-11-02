import React, { useContext } from "react";
import { UserContext } from "../context/user";

function Logout() {
  const [, setUser] = useContext(UserContext);
  function onLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(() => console.log("Logged out"))
      .then(() => setUser(null))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
}

export default Logout;
