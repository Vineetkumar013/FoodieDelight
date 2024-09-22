import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "John Doe", quote: "Best food I've ever had!", image: "https://images.unsplash.com/photo-1541876788-2221e585da7f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Jane Smith", quote: "Absolutely delicious!", image: "https://images.unsplash.com/uploads/14122490187939c23049f/82e2ae94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTQ3NTgyNXx8ZW58MHx8fHx8" },
    { id: 3, name: "Bob Johnson", quote: "I keep coming back for more!", image: "https://images.unsplash.com/photo-1495767771383-e68aa78249f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwxQnZiNUlhMmRFb3x8ZW58MHx8fHx8" },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-bold mt-4">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;