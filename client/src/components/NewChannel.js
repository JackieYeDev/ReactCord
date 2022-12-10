import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/NewChannel.css";

function NewChannel() {
  const [name, setName] = useState("");
  const [user, setUser] = useContext(UserContext);
  function handleCreateChannel() {
    fetch("/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((response) => {
        const updatedUser = {
          ...user,
          channels: [...user.channels, response],
        };
        setUser(updatedUser);
        setName("");
      });
  }
  return (
    <div className={"newChannelCard"}>
      <div className={"container"}>
        <input
          placeholder={"Enter new name for channel"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type={"search"}
        />
      </div>
      <p>
        <button onClick={() => handleCreateChannel()}>Create Channel</button>
      </p>
    </div>
  );
}
export default NewChannel;
