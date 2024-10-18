import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, isSender }) => {
  return (
    <motion.div 
      className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}
      initial={{ opacity: 0, x: isSender ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`p-3 rounded-lg ${isSender ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
        {message.text}
      </div>
    </motion.div>
  );
};

export default ChatMessage;