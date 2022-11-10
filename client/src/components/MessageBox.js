import React, { useState } from "react";

function MessageBox(props) {
  const [content, setContent] = useState("");
  const channelId = props.channelId;
  function handleSend() {
    fetch(`/channels/${channelId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    });
  }
  return (
    <div>
      <textarea
        rows={10}
        placeholder={"Enter a message here ..."}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          handleSend();
        }}
      >
        Send!
      </button>
    </div>
  );
}

export default MessageBox;
