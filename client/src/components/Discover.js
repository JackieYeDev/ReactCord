import React, { useEffect, useState } from "react";
import {
  Card,
  CardFooter,
  CardGroup,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";

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
    <Container style={{ padding: "5rem" }}>
      <CardGroup>
        {channelList.map((channel) => {
          return (
            <Card>
              <CardTitle>{channel.name}</CardTitle>
              <CardFooter>{channel.user_count} Members</CardFooter>
            </Card>
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default Discover;
