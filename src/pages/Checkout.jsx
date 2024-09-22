import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
    toast.success('Order placed successfully!');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h2>
        {orderPlaced ? (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Successful!</h3>
            <p className="text-gray-600">Thank you for your order. Your total amount is ${totalPrice.toFixed(2)}.</p>
            <h4 className="text-xl font-bold text-gray-800 mt-8">Order Summary</h4>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h3>
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">${item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800">Total: ${totalPrice.toFixed(2)}</h3>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Shipping Information</h3>
              <form onSubmit={handlePlaceOrder}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Address
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Your Address" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                    City
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="Your City" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                    ZIP Code
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" placeholder="Your ZIP Code" required />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600" type="submit">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;