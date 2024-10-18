import React from 'react';
import { motion } from 'framer-motion';

const Notification = ({ message, onClose }) => {
  return (
    <motion.div 
      className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
    >
      <p>{message}</p>
      <button 
        className="absolute top-2 right-2 text-white"
        onClick={onClose}
      >
        &times;
      </button>
    </motion.div>
  );
};

export default Notification;