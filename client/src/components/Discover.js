import React, { useEffect, useState } from "react";

function Discover() {
  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    fetch("/channels", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => setChannelList(response));
  });

  return (
    <div style={{ padding: "5rem" }}>
      <div>
        {channelList.map((channel, index) => {
          return (
            <div key={index} style={{ display: "inline-block" }}>
              <p>{channel.name}</p>
              <p>{channel.user_count} Members</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Discover;
