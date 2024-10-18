import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className }) => {
  return (
    <motion.button 
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;