import React, { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import Messages from "./Messages";
import consumer from "../channels/consumer";

function Channels(props) {
  const channelId = props.match.params.id;
  const MessagesChannel = consumer.subscriptions.create(
    { channel: `${channelId}`, room: "1st Room" },
    {
      connected() {},
      disconnected() {},
      received(data) {},
    }
  );
  useEffect(() => {
    console.log("From Channel.js this is called");
    MessagesChannel.send({ sent_by: "Paul", body: "This is a cool chat app." });
  }, []);

  return (
    <div>
      <Messages channelId={channelId} messagesChannel={MessagesChannel} />
      <MessageBox channelId={channelId} />
    </div>
  );
}

export default Channels;
