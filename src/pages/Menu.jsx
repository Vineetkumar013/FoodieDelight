import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import DishDetailsModal from '../components/DishDetailsModal';

const initialDishes = [
  { id: 1, name: "Paneer Butter Masala", description: "Cottage cheese cubes in rich tomato gravy.", price: 12.99, image: require('../assets/images/Paneer-Butter-Masala.webp') },
  { id: 2, name: "Aloo Gobi", description: "Potato and cauliflower cooked with spices.", price: 9.99, image: require('../assets/images/Aloo-Gobi.png') },
  { id: 3, name: "Chole Bhature", description: "Spicy chickpea curry served with fried bread.", price: 10.99, image: require('../assets/images/Chole-Bhature.jpg') },
  { id: 4, name: "Baingan Bharta", description: "Smoked mashed eggplant cooked with spices.", price: 11.99, image: require('../assets/images/Baingan-Bharta.png') },
  { id: 5, name: "Palak Paneer", description: "Cottage cheese cooked in a spinach-based gravy.", price: 12.99, image: require('../assets/images/Palak-Paneer.webp') },
  { id: 6, name: "Rajma Chawal", description: "Kidney bean curry served with steamed rice.", price: 8.99, image: require('../assets/images/Rajma-Chawal.jpg') },
  { id: 7, name: "Masala Dosa", description: "Crispy rice crepe stuffed with spiced potatoes.", price: 7.99, image: require('../assets/images/Masala-Dosa.jpg') },
  { id: 8, name: "Vegetable Biryani", description: "Aromatic rice with mixed vegetables and spices.", price: 14.99, image: require('../assets/images/vegetable-biryani.jpg') },
  { id: 9, name: "Daal Tadka", description: "Yellow lentils tempered with spices and herbs.", price: 9.99, image: require('../assets/images/Dal-Tadka.jpg') },
  { id: 10, name: "Matar Paneer", description: "Green peas and paneer cooked in a tomato gravy.", price: 12.99, image: require('../assets/images/Matar-Paneer.jpg') },
  { id: 11, name: "Bhindi Masala", description: "Okra stir-fried with onions and spices.", price: 10.99, image: require('../assets/images/Bhindi-Masala.jpg') },
  { id: 12, name: "Aloo Paratha", description: "Stuffed flatbread with spiced potato filling.", price: 6.99, image: require('../assets/images/Aloo-Paratha.jpg') },
  { id: 13, name: "Pav Bhaji", description: "Spiced mashed vegetables served with buttered buns.", price: 9.99, image: require('../assets/images/Pav-Bhaji.jpg') },
  { id: 14, name: "Samosa Chaat", description: "Crispy samosas topped with chutneys and yogurt.", price: 8.99, image: require('../assets/images/Samosa-Chaat.jpg') },
  { id: 15, name: "Paneer Tikka", description: "Grilled cottage cheese cubes marinated in spices.", price: 13.99, image: require('../assets/images/paneer-tikka.png') },
  { id: 16, name: "Gajar Ka Halwa", description: "Sweet carrot pudding with cardamom and nuts.", price: 5.99, image: require('../assets/images/Gajar-Halwa.jpg') },
  { id: 17, name: "Pani Puri", description: "Crispy hollow puris filled with tangy water.", price: 6.99, image: require('../assets/images/Pani-Puri.jpg') },
  { id: 18, name: "Rasgulla", description: "Spongy cheese balls soaked in sugar syrup.", price: 7.99, image: require('../assets/images/Rasgulla.png') },
  { id: 19, name: "Khichdi", description: "Comforting mix of rice and lentils.", price: 8.99, image: require('../assets/images/Khichdi.jpg') },
  { id: 20, name: "Shahi Paneer", description: "Paneer in a creamy, spiced gravy.", price: 14.99, image: require('../assets/images/Shahi-Paneer.jpg') }
];



const Menu = () => {
  const { addToCart } = useCart();
  const [dishes, setDishes] = useState([initialDishes]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

//   const initialDishes = [
//     { id: 1, name: "Pasta Primavera", description: "Fresh vegetables in a creamy sauce.", price: 12.99, image: "https://source.unsplash.com/1600x900/?pasta" },
//     { id: 2, name: "Grilled Salmon", description: "Healthy and delicious.", price: 15.99, image: "https://source.unsplash.com/1600x900/?salmon" },
//     { id: 3, name: "Vegetable Stir Fry", description: "A perfect blend of flavors.", price: 10.99, image: "https://source.unsplash.com/1600x900/?stir-fry" },
//     { id: 4, name: "Gujarati Thali", description: "Gujarati Thali with a balance of flavors.", price: 18.99, image: "https://i.pinimg.com/736x/1f/32/81/1f32811ea2f6fa6eaae8dfade16122e7.jpg" },
//   ];
    
//   const fetchMoreData = () => {
//     if (dishes.length >= 50) {
//       setHasMore(false);
//       return;
//     }
//     setTimeout(() => {
//       const newDishes = Array.from({ length: 10 }).map((_, i) => ({
//         id: dishes.length + i + 1,
//         name: `Dish ${dishes.length + i + 1}`,
//         description: `Description for Dish ${dishes.length + i + 1}`,
//         price: (Math.random() * 20 + 5).toFixed(2),
//           // image: `https://source.unsplash.com/1600x900/?food,dish${dishes.length + i + 1}`,
//          image: `https://i.pinimg.com/564x/0d/8a/f8/0d8af8b8e66391d0fca5ef7e88ff95f5.jpg`,
//       }));
//       setDishes([...dishes, ...newDishes]);
//       setFilteredDishes([...dishes, ...newDishes]);
//     }, 1500);
//   };

//   useEffect(() => {
//     setDishes(initialDishes);
//     setFilteredDishes(initialDishes);
//     fetchMoreData();
    //   }, []);
    
    const fetchMoreData = () => {
  if (dishes.length >= initialDishes.length) {
    setHasMore(false);
    return;
  }

  setTimeout(() => {
    // Fetch next 10 dishes from the initialDishes array
    const newDishes = initialDishes.slice(dishes.length, dishes.length + 10);
    
    // Update state with the new dishes
    setDishes([...dishes, ...newDishes]);
    setFilteredDishes([...dishes, ...newDishes]);
  }, 1500);
};

useEffect(() => {
  // Initialize dishes with the first batch from the initialDishes array
  setDishes(initialDishes.slice(0, 10));
  setFilteredDishes(initialDishes.slice(0, 10));
}, []);



  const handleSearch = (query) => {
    const filtered = dishes.filter(dish => 
      dish.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDishes(filtered);
  };

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Menu</h2>
        <SearchBar onSearch={handleSearch} />
        <InfiniteScroll
          dataLength={filteredDishes.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading more dishes...</h4>}
          endMessage={<p className="text-center mt-8">No more dishes to load.</p>}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105" 
                  onClick={() => handleDishClick(dish)}
                />
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
              </div>
            ))}
          </div>
        </InfiniteScroll>
        {selectedDish && (
          <DishDetailsModal dish={selectedDish} onClose={handleCloseModal} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
