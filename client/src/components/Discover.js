import React, { useContext, useEffect, useState } from "react";
import "../styles/Discover.css";
import { UserContext } from "../context/user";

function Discover() {
  const [channelList, setChannelList] = useState([]);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    fetch("/channels", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setChannelList(response);
      });
  }, [user]);

  function handleSubscribe(id) {
    //`/subscribe/channels/${channel.id}`
    console.log("Subscribe was clicked");
    fetch(`/subscribe/channels/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const updatedUser = {
          ...user,
          channels: [...user.channels, response.channel],
        };
        setUser(updatedUser);
      });
  }

  function handleUnsubscribe(id) {
    // `/unsubscribe/channels/${channel.id}`
    console.log("Unsubscribed was clicked");
    fetch(`/unsubscribe/channels/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const updatedChannels = user.channels.filter((c) => c.id !== id);
        const updatedUser = {
          ...user,
          channels: [...updatedChannels],
        };
        setUser(updatedUser);
      }
    });
  }

  return (
    <div className={"row"}>
      {channelList.map((channel, index) => {
        return (
          <div className={"column"}>
            <div key={index} className={"card"}>
              <img
                src={`https://via.placeholder.com/350x150?text=${channel.name}`}
                alt={"Channel Image"}
              ></img>
              <div className={"container"}>
                <h4>
                  <b>{channel.name}</b>
                </h4>
                <p>{channel.user_count} Members</p>
              </div>

              {user.channels.find((c) => c.id === channel.id) ? (
                <button
                  className={"redButton"}
                  onClick={() => handleUnsubscribe(channel.id)}
                >
                  Unsubscribe
                </button>
              ) : (
                <button
                  className={"greenButton"}
                  onClick={() => handleSubscribe(channel.id)}
                >
                  Subscribe
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Discover;
