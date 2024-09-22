import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663850685051-ef8c3a8524ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to FoodieDelight
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8"
        >
          Discover the best food in town.
        </motion.p>
        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600"
        >
          Explore Menu
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;