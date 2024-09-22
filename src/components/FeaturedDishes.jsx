import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const FeaturedDishes = () => {
  const { addToCart } = useCart();

  const dishes = [
    { id: 1, name: "Pasta Primavera", description: "Fresh vegetables in a creamy sauce.", price: 12.99, image: "https://i.pinimg.com/564x/52/ed/ce/52edce100a429cd231e52c7b6e19a430.jpg" },
    { id: 2, name: "Grilled Salmon", description: "Healthy and delicious.", price: 15.99, image: "https://images.unsplash.com/photo-1707576517985-a2e912cca325?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, name: "Vegetable Stir Fry", description: "A perfect blend of flavors.", price: 10.99, image: "https://i.pinimg.com/564x/bc/ec/8c/bcec8c25ce2ef677397cbdf956ab6ec2.jpg" },
    { id: 4, name: 'Delicious Pizza', description: 'Cheesy and tasty pizza with the finest ingredients.',price: 25.99, image: 'https://i.pinimg.com/564x/b1/5a/90/b15a90419f7cd50f500c5342049c68cb.jpg' },
      { id: 5, name: 'Fresh Salad', description: 'Healthy green salad with organic veggies.',price: 15.59, image: 'https://i.pinimg.com/564x/0a/5a/53/0a5a53ce8754c0680d62ddb3bd4f277b.jpg' },
      { id: 6, name: 'Juicy Burger', description: 'Perfectly grilled beef patty with a soft bun.',price: 30.19, image: 'https://i.pinimg.com/564x/e1/98/57/e19857041a77465bb4aab8038772e8f5.jpg' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <motion.div 
            key={dish.id}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
              <p className="text-gray-600">{dish.description}</p>
              <p className="text-lg font-bold text-gray-800 mt-2">${dish.price}</p>
              <button 
                onClick={() => addToCart(dish)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-yellow-600"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDishes;