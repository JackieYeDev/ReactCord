import React, { useState } from "react";

function NewChannel() {
  const [name, setName] = useState("");
  function handleCreateChannel() {
    fetch("/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((response) => console.log(response));
  }
  return (
    <div>
      <input
        placeholder={"Enter new name for channel"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleCreateChannel()}>Create Channel.</button>
    </div>
  );
}
export default NewChannel;
