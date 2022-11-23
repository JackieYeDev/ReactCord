import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/user";
import { CableContext } from "../context/cable";

function Messages() {
  const [user, setUser] = useContext(UserContext);
  const cableContext = useContext(CableContext);
  const { id: channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const chatChannel = useRef(null);
  const listGroupRef = useRef(null);
  useEffect(() => {
    chatChannel.current = cableContext.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        id: channelId,
      },
      {
        received: (data) => {
          setMessages((prevMessages) => {
            return Array.isArray(data) ? data : [...prevMessages, data];
          });
        },
        connected: () => console.log("connected"),
        disconnected: () => console.log("disconnected"),
      }
    );
    return () => chatChannel.current.unsubscribe();
  }, [cableContext, channelId]);
  // TODO: Fix so that messages starts at the bottom
  // useEffect(() => {
  //   listGroupRef.current.scrollIntoView({ behavior: "smooth" });
  // }, []);
  function handleSubmit(e) {
    if (e.keyCode == 13) {
      chatChannel.current.send({ content, channelId, userId: user.id });
      setContent("");
    }
  }
  return (
    <>
      <div
        className={"message-container"}
        ref={listGroupRef}
        style={{ padding: "5rem" }}
      >
        {messages !== [] &&
          messages.map((message, index) => (
            <p key={index}>
              {message.user.username} : {message.content}
            </p>
          ))}
      </div>
      <div>
        <input
          className={"message-bar"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => handleSubmit(e)}
        ></input>
      </div>
    </>
  );
}

export default Messages;
