import React from 'react';
import { Link } from 'react-router-dom';

const ChatHome = () => {
    
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <Link to="/chat" className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
        Start Chatting
      </Link>
    </div>
  );
};

export default ChatHome;
