import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <form className="mt-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;