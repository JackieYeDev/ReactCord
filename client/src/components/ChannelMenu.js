import React, { useEffect, useState } from "react";

function ChannelMenu() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    fetch("/channels", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => setChannels(response));
  }, []);

  return (
    <div>
      <ul>
        {channels &&
          channels.map((channel, index) => {
            return <li key={index}>{channel.name}</li>;
          })}
      </ul>
    </div>
  );
}
export default ChannelMenu;
