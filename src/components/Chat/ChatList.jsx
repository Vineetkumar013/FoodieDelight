import React from 'react';
import { motion } from 'framer-motion';

const ChatList = ({ chats, onSelect }) => {
  return (
    <motion.div 
      className="flex flex-col overflow-y-auto bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {chats.map((chat, index) => (
        <motion.div 
          key={index} 
          className="flex items-center p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => onSelect(chat)}
          whileHover={{ scale: 1.05 }}
        >
          <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-4" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{chat.name}</h2>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ChatList;