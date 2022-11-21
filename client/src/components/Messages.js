import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Input, ListGroup, ListGroupItem } from "reactstrap";
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
  function handleSubmit(e) {
    if (e.keyCode == 13) {
      chatChannel.current.send({ content, channelId, userId: user.id });
      setContent("");
    }
  }
  return (
    <>
      <ListGroup>
        {messages !== [] &&
          messages.map((message, index) => (
            <ListGroupItem key={index}>
              {message.user.username} : {message.content}
            </ListGroupItem>
          ))}
      </ListGroup>
      <div>
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => handleSubmit(e)}
        ></Input>
        {/*<Button*/}
        {/*  onClick={(e) => {*/}
        {/*    handleSubmit(e);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Send!*/}
        {/*</Button>*/}
      </div>
    </>
  );
}

export default Messages;
