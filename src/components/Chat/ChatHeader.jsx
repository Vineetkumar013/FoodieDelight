import React from 'react';
import { motion } from 'framer-motion';

const ChatHeader = ({ user }) => {
  return (
    <motion.div 
      className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{user.name}</h2>
    </motion.div>
  );
};

export default ChatHeader;