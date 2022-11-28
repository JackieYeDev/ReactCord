import React from "react";
import "../styles/MessageCard.css";

function MessageCard(props) {
  return (
    <div className={"messageCard"}>
      <div className={"messageAvatarContainer"}>
        <img
          height={40}
          width={40}
          src={`https://ui-avatars.com/api/?name=${props.user[0]}`}
          className={"messageAvatar"}
          alt={props.user}
        ></img>
      </div>
      <div>
        <div className={"messageDetails"}>
          <p className={"sender"}>{props.user}</p>
          <small className={"timestamp"}>{props.date}</small>
        </div>
        <p className={"messageText"}>{props.content}</p>
      </div>
    </div>
  );
}

export default MessageCard;
