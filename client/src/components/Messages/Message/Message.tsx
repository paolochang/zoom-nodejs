import React from "react";
import ReactEmoji from "react-emoji";
import { IMessage } from "../../../types";
import "./Message.css";

interface IMessageComponent {
  message: IMessage;
  name: string;
}

const Message: React.FC<IMessageComponent> = ({
  message: { text, user },
  name,
}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <>
      {user === "notice" ? (
        <div className="messageContainer justifyCenter">
          <div className="noticeBox backgroundNotice">
            <p className="noticeText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )}
    </>
  );
};

export default Message;
