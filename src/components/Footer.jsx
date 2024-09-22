import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">We are a passionate team dedicated to serving the best food in town.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400">123 Food Street, Delicious City</p>
            <p className="text-gray-400">info@foodiedelight.com</p>
            <p className="text-gray-400">+123 456 7890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 FoodieDelight. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;