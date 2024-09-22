import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-4"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl mb-8"
            >
              Discover our story and the passion behind FoodieDelight.
            </motion.p>
          </div>
        </div>
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
          <p className="text-gray-600">
            FoodieDelight was founded in 2020 with a vision to bring the best food experiences to our customers. Our journey began with a small kitchen and a big dream. Today, we are proud to serve delicious meals to thousands of satisfied customers.
          </p>
        </div>
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://plus.unsplash.com/premium_photo-1663013691446-33ff176e32fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNoZWZ8ZW58MHx8MHx8fDA%3D" alt="Chef" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">John Doe</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://images.unsplash.com/photo-1610851467843-fe4a65aea9c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNoZWZ8ZW58MHx8MHx8fDA%3D" alt="Chef" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jane Smith</h3>
              <p className="text-gray-600">Sous Chef</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://plus.unsplash.com/premium_photo-1687697860459-e4a751f80f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNoZWZ8ZW58MHx8MHx8fDA%3D" alt="Chef" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bob Johnson</h3>
              <p className="text-gray-600">Pastry Chef</p>
            </div>
          </div>
        </div>
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to provide high-quality, delicious meals that satisfy your cravings and leave you wanting more. We are committed to using fresh, locally-sourced ingredients and creating a warm, welcoming atmosphere for our customers.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;