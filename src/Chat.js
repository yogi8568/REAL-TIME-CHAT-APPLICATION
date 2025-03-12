import React, { useState, useEffect } from "react";
import { db, collection, addDoc, query, orderBy, onSnapshot } from "./firebaseConfig";
import Message from "./Message";
import InputBox from "./InputBox";
import TypingIndicator from "./TypingIndicator";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => <Message key={msg.id} data={msg} />)}
      </div>
      {isTyping && <TypingIndicator />}
      <InputBox setIsTyping={setIsTyping} />
    </div>
  );
};

export default Chat;
