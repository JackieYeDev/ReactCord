import React, { useContext, useEffect, useState } from "react";
import "../styles/SideBar.css";
import "../styles/Channel.css";
import plusSign from "../assets/Plus_symbol.svg";
import navigateSymbol from "../assets/Navigate_symbol.svg";
import Channel from "./Channel";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { UserContext } from "../context/user";

function SideBar() {
  const [channels, setChannels] = useState([]);
  const [user] = useContext(UserContext);
  // To be used in Discover ...
  // useEffect(() => {
  //   fetch("/channels", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((response) => setChannels(response));
  // }, []);

  useEffect(() => {
    setChannels(user.channels);
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
      <div className={"channelWrapper"}>
        <div className={"channelAvatar"}>
          <Link to={"/discover"}>
            <img
              src={navigateSymbol}
              className={"channelAvatarImage"}
              height={48}
              width={48}
              alt={"Discover Channels"}
            ></img>
          </Link>
        </div>
      </div>
      <Logout />
    </div>
  );
}
export default SideBar;
