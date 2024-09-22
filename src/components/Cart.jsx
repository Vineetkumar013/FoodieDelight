import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-12 text-center border border-gray-200"
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <Link to="/checkout">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-yellow-600">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
