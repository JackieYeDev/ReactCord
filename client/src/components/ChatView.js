import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CableContext } from "../context/cable";
import MessageCard from "./MessageCard";
import MessageBox from "./MessageBox";
import Header from "./Header";

function ChatView() {
  const cableContext = useContext(CableContext);
  const { id: channelId } = useParams();
  const [messages, setMessages] = useState([]);
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
            return Array.isArray(data) ? data : [...prevMessages, data];
          });
        },
        connected: () => console.log("connected"),
        disconnected: () => console.log("disconnected"),
      }
    );
    return () => chatChannel.current.unsubscribe();
  }, [cableContext, channelId]);
  function toTimeStamp(date) {
    let timeStamp = new Date(date);
    timeStamp = timeStamp.toString();
    return timeStamp;
  }
  return (
    <div className={"chatView"}>
      <Header />
      <div className={"messagesContainer"}>
        {messages !== [] &&
          messages.map((message, index) => (
            <MessageCard
              key={index}
              content={message.content}
              user={message.user.username}
              date={toTimeStamp(message.created_at)}
            />
          ))}
      </div>
      <MessageBox channelId={channelId} chatChannel={chatChannel} />
    </div>
  );
}

export default ChatView;
