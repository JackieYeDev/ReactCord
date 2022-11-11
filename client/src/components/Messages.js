import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ActionCable from "actioncable";

function Messages(props) {
  const channelId = props.channelId;
  const [messages, setMessages] = useState([]);
  const cable = ActionCable.createConsumer("ws://localhost:3000/cable");
  const createSubscription = () => {
    cable.subscriptions.create(
      { channel: "MessagesChannel" },
      {
        connected: () => console.log("Connected"),
        disconnected: () => console.log("Disconnected"),
        received: (data) => console.log(data),
      }
    );
  };
  useEffect(() => {
    createSubscription();
  }, []);
  useEffect(() => {
    console.log("This in Messages is called");
    props.messagesChannel.received = (data) => console.log(data);
  }, []);
  useEffect(() => {
    fetch(`/channels/${channelId}/messages`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setMessages(response);
      });
  }, []);
  return (
    <ListGroup>
      {messages !== [] &&
        messages.map((message, index) => (
          <ListGroupItem key={index}>
            {message.user.username} : {message.content}
          </ListGroupItem>
        ))}
    </ListGroup>
  );
}

export default Messages;
