import { motion } from 'framer-motion';

const DishDetailsModal = ({ dish, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
        <p className="text-gray-600">{dish.description}</p>
        <p className="text-lg font-bold text-gray-800 mt-2">${dish.price}</p>
        <button 
          onClick={onClose}
          className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-yellow-600"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default DishDetailsModal;