import React from "react";
import "./chat.css";
import { formatDistanceToNow } from "date-fns";

const Message = ({ data }) => {
  // Debugging: Log timestamp to check if it's valid
  console.log("Message timestamp:", data.timestamp);

  // Convert Firestore Timestamp to JavaScript Date if needed
  let messageTime = null;
  if (data.timestamp) {
    try {
      messageTime = new Date(data.timestamp.seconds ? data.timestamp.seconds * 1000 : data.timestamp);
      if (isNaN(messageTime)) throw new Error("Invalid date");
    } catch (error) {
      console.error("Error parsing timestamp:", error);
      messageTime = null;
    }
  }

  const formattedTime = messageTime ? formatDistanceToNow(messageTime, { addSuffix: true }) : "Unknown time";

  return (
    <div className={`message-bubble ${data.isMine ? "sent" : "received"}`}>
      {data.fileUrl ? (
        data.fileType.startsWith("image/") ? (
          <img src={data.fileUrl} alt="Uploaded file" className="chat-image" />
        ) : (
          <a href={data.fileUrl} target="_blank" rel="noopener noreferrer">
            Download File
          </a>
        )
      ) : (
        <p>{data.text}</p>
      )}
      <span className="timestamp">{formattedTime}</span>
    </div>
  );
};

export default Message;
