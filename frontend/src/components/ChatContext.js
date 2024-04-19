import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [gptmessages, setgptMessages] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };
  const addgptMessage = (gptmessages) => {
    setgptMessages((prevMessages) => [...prevMessages, gptmessages]);
  };
  const resetChat = () => {
    setMessages([]);
    setLoading(false);
    setError(null);
  };

  return (
    <ChatContext.Provider value={{ messages, loading, error, addMessage, setLoading, setError, resetChat, gptmessages,addgptMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
