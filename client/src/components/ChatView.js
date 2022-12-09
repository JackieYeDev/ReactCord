import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CableContext } from "../context/cable";
import MessageCard from "./MessageCard";
import MessageBox from "./MessageBox";
import Header from "./Header";
import "../styles/ChatView.css";

function ChatView() {
  const cableContext = useContext(CableContext);
  const { id: channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const [searchString, setSearchString] = useState("");
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

  const filteredMessage = messages.filter((message) => {
    return message.content.toLowerCase().includes(searchString.toLowerCase());
  });

  return (
    <div className={"chatView"}>
      <Header searchString={searchString} setSearchString={setSearchString} />
      <div className={"messagesContainer"}>
        {filteredMessage !== [] &&
          filteredMessage.map((message, index) => (
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
