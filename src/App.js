import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <ToastContainer />
    </CartProvider>
  );
};

export default App;
