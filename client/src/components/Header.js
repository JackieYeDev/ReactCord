import React, { useContext } from "react";
import "../styles/Header.css";
import { ChannelContext } from "../context/channel";

function Header() {
  const [channelName] = useContext(ChannelContext);
  return (
    <div className={"chatHeader"}>
      <div className={"roomNameContainer"}>
        <img
          height={20}
          width={20}
          src={`https://ui-avatars.com/api/?name=${channelName[0]}`}
          className={"svg"}
          alt=""
        />
        <h3 className={"title"}>{channelName}</h3>
        <div className={"chatHeaderStatus"} id="online" />
      </div>
      <div className={"headerItem"}>
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
