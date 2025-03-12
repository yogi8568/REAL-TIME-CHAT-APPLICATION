import React, { useState } from "react";
import { db, collection, addDoc } from "./firebaseConfig";
import FileUpload from "./FileUpload";

const InputBox = ({ setIsTyping }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (message.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: message,
      timestamp: new Date(),
    });

    setMessage("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={(e) => {
          setMessage(e.target.value);
          setIsTyping(e.target.value.length > 0);
        }}
        onBlur={() => setIsTyping(false)}
      />
      <button onClick={sendMessage}>Send</button>
      <FileUpload />
    </div>
  );
};

export default InputBox;
