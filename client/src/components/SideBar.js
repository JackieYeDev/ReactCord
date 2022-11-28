import React, { useEffect, useState } from "react";
import "../styles/SideBar.css";
import "../styles/Channel.css";
import plusSign from "../assets/Plus_symbol.svg";
import logoutSymbol from "../assets/Logout_symbol.svg";
import Channel from "./Channel";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function SideBar() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    fetch("/channels", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => setChannels(response));
  }, []);

  return (
    <div className={"sideBarWrapper"}>
      {channels &&
        channels.map((channel, index) => {
          return (
            <Channel
              channelId={channel.id}
              channelName={channel.name}
              channelImg={`https://ui-avatars.com/api/?name=${channel.name[0]}`}
              key={index}
            />
          );
        })}
      <div className={"channelWrapper"}>
        <div className={"channelAvatar"}>
          <Link to={"/new-channel"}>
            <img
              src={plusSign}
              className={"channelAvatarImage"}
              height={48}
              width={48}
              alt={"New Channel"}
            ></img>
          </Link>
        </div>
      </div>
      <Logout />
    </div>
  );
}
export default SideBar;
