import React from 'react';
import { motion } from 'framer-motion';

const MainContent = ({ children }) => {
  return (
    <motion.div 
      className="flex-grow bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MainContent;