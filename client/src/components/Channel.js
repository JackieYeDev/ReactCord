import React, { useContext, useEffect, useState } from "react";
import "../styles/Channel.css";
import { Link } from "react-router-dom";
import { ChannelContext } from "../context/channel";

function Channel(props) {
  const [, setChannelName] = useContext(ChannelContext);
  return (
    <div className={"channelWrapper"}>
      <div className={"channelAvatar"}>
        {/*<div className={"tooltip"}>*/}
        <Link
          to={`/channel/${props.channelId}`}
          onClick={() => setChannelName(props.channelName)}
        >
          <img
            src={props.channelImg}
            className={"channelAvatarImage"}
            height={48}
            width={48}
            alt={props.channelName}
          ></img>
          {/*<span className={"tooltiptext"}>{channel.name}</span>*/}
        </Link>
      </div>
      {/*</div>*/}
    </div>
  );
}
export default Channel;
