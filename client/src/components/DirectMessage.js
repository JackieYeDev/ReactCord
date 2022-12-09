import React, { useEffect, useState } from "react";
import "../styles/DirectMessage.css";

function DirectMessage() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => setUserList(response));
  }, []);
  return (
    <div className={"conversations"}>
      <div className={"conversationListTop"}>
        <input type="search" placeholder="Find or start a conversation" />
      </div>
      <div className={"conversationsContainer"}>
        <div className={"dmTitle"}>USER LIST</div>
        {userList !== [] &&
          userList.map((user, index) => {
            return (
              <div className={"elementsContainer"} key={index}>
                <div className={"svgContainer"}>
                  <img
                    height={25}
                    width={25}
                    src={`https://ui-avatars.com/api/?name=${user.username[0]}`}
                    className={"svg"}
                    alt={user.username[0]}
                  />
                </div>
                <p>{user.username}</p>
              </div>
            );
          })}
        <div className={"dmTitle"}>DIRECT MESSAGES</div>
        {/*{dms !== null &&*/}
        {/*  dms.map((dm, index) => (*/}
        {/*    <DmCard*/}
        {/*      key={index}*/}
        {/*      name={dm.name}*/}
        {/*      id={dm.id}*/}
        {/*      avatar={*/}
        {/*        dm.avatar ||*/}
        {/*        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU"*/}
        {/*      }*/}
        {/*      status="online"*/}
        {/*    />*/}
        {/*  ))}*/}
      </div>
    </div>
  );
}

export default DirectMessage;
