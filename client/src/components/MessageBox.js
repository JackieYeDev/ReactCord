import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/MessageBox.css";

function MessageBox(props) {
  const [user, setUser] = useContext(UserContext);
  const [content, setContent] = useState("");
  function handleSubmit(e) {
    if (e.keyCode == 13) {
      props.chatChannel.current.send({
        content,
        channelId: props.channelId,
        userId: user.id,
      });
      setContent("");
    }
  }
  return (
    <div className={"messageInputContainer"}>
      <div className={"messageInputWrapper"}>
        <input
          className={"messageInput"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => handleSubmit(e)}
        ></input>
      </div>
    </div>
  );
}

export default MessageBox;
