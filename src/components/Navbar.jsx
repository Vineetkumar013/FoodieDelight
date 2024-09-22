import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">FoodieDelight</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/menu" className="text-gray-700 hover:text-gray-900">Menu</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-gray-900">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-900">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;