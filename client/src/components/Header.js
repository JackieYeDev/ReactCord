import React, { useContext } from "react";
import "../styles/Header.css";
import { ChannelContext } from "../context/channel";

function Header() {
  const [channelName] = useContext(ChannelContext);
  return (
    <div className={"chatHeader"}>
      <div className={"roomNameContainer"}>
        <img height={20} width={20} src={"at"} className={"svg"} alt="" />
        <h3 className={"title"}>{channelName}</h3>
        <div className={"chatHeaderStatus"} id="online" />
      </div>
      <div className={"connectWallet"}>Connect Wallet</div>
      )}
      <div className={"headerIconsContainer"}>
        <div className={"headerItem"}>
          <img height={25} width={25} src={"phone"} className={"svg"} alt="" />
        </div>
        <div className={"headerItem"}>
          <img height={25} width={25} src={"video"} className={"svg"} alt="" />
        </div>
      </div>
      <div className={"headerItem"}>
        <img height={25} width={25} src={"pin"} className={"svg"} alt="" />
      </div>
      <div className={"headerItem"}>
        <img
          height={25}
          width={25}
          src={"personPlus"}
          className={"svg"}
          alt=""
        />
      </div>
      <div className={"headerItem"}>
        <input type="search" placeholder="Search" />
      </div>
      <div className={"headerItem"}>
        <img height={25} width={25} src={"inbox"} className={"svg"} alt="" />
      </div>
      <div className={"headerItem"}>
        <img height={25} width={25} src={"help"} className={"svg"} alt="" />
      </div>
    </div>
  );
}

export default Header;
