import React, { useState } from 'react';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatMessage from '../components/Chat/ChatMessage';
import ChatInput from '../components/Chat/ChatInput';
import Sidebar from '../components/Layout/Sidebar';
import MainContent from '../components/Layout/MainContent';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState({ name: 'John Doe', avatar: 'https://via.placeholder.com/150' });

  const handleSend = (message) => {
    setMessages([...messages, { text: message, isSender: true }]);
  };

  const chats = [
    { name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', avatar: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar chats={chats} onSelect={setCurrentChat} />
      <MainContent>
        <ChatHeader user={currentChat} />
        <div className="flex-grow p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} isSender={message.isSender} />
          ))}
        </div>
        <ChatInput onSend={handleSend} />
      </MainContent>
    </div>
  );
};

export default ChatRoom;