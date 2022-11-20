import React, { useContext, useEffect, useRef, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
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
  useEffect(() => {
    chatChannel.current = cableContext.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        id: channelId,
      },
      {
        received: (data) => {
          setMessages((prevMessages) => {
            return Array.isArray(data) ? data : [data, ...prevMessages];
          });
        },
        connected: () => console.log("connected"),
        disconnected: () => console.log("disconnected"),
      }
    );
    return () => chatChannel.current.unsubscribe();
  }, [cableContext, channelId]);
  // useEffect(() => {
  //   fetch(`/channels/${channelId}/messages`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       setMessages(response);
  //     });
  // }, []);
  function handleSubmit(e) {
    e.preventDefault();
    chatChannel.current.send({ content, channelId, userId: user.id });
    setContent("");
  }
  return (
    <>
      <div>
        <textarea
          rows={10}
          placeholder={"Enter a message here ..."}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Send!
        </button>
      </div>
      <ListGroup>
        {messages !== [] &&
          messages.map((message, index) => (
            <ListGroupItem key={index}>
              {message.user.username} : {message.content}
            </ListGroupItem>
          ))}
      </ListGroup>
    </>
  );
}

export default Messages;
