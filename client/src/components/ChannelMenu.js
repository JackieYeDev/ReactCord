import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

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
    <Nav>
      {channels &&
        channels.map((channel, index) => {
          return (
            <NavItem key={index}>
              <NavLink href={`/channel/${channel.id}`}>{channel.name}</NavLink>
            </NavItem>
          );
        })}
    </Nav>
  );
}
export default ChannelMenu;
