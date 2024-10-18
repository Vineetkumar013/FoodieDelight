import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <motion.div 
      className="flex items-center p-4 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        className="flex-grow p-2 rounded-l-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none" 
        placeholder="Type a message..."
      />
      <button 
        onClick={handleSend} 
        className="p-2 bg-blue-500 text-white rounded-r-lg"
      >
        Send
      </button>
    </motion.div>
  );
};

export default ChatInput;