import React from "react";
import Logout from "./Logout";
import { Route } from "react-router-dom";
import SideBar from "./SideBar";
import "../styles/Home.css";
import ChatView from "./ChatView";
import NewChannel from "./NewChannel";
import DirectMessage from "./DirectMessage";
import { ChannelProvider } from "../context/channel";

function Home() {
  return (
    <ChannelProvider>
      <div className={"homeWrapper"}>
        <SideBar />
        <div className={"homeMain"}>
          <DirectMessage />
          <Route path={"/new-channel"} component={NewChannel} />
          <Route component={ChatView} path={"/channel/:id"} />
        </div>
      </div>
    </ChannelProvider>
  );
}
export default Home;
