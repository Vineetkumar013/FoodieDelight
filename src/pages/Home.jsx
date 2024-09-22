import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;