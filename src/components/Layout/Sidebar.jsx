import React from 'react';
import { motion } from 'framer-motion';
import ChatList from '../Chat/ChatList';

const Sidebar = ({ chats, onSelect }) => {
  return (
    <motion.div 
      className="w-1/4 bg-gray-100 dark:bg-gray-800"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ChatList chats={chats} onSelect={onSelect} />
    </motion.div>
  );
};

export default Sidebar;