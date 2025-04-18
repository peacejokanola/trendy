import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShoppingBagIcon, GlobeIcon, SparklesIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
const Home = () => {
  // Sample featured products
  const featuredProducts = [{
    id: 'original',
    name: 'Original Blend',
    description: 'Our signature Mexican drink made with our secret recipe. A perfect balance of flavors that has delighted customers worldwide.',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    id: 'spicy',
    name: 'Spicy Edition',
    description: 'A bold twist on our classic recipe with an added kick of spice. For those who like their drinks with a bit more heat.',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1622543925917-763c34c31d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    id: 'citrus',
    name: 'Citrus Infusion',
    description: 'A refreshing blend with zesty citrus notes. Perfect for hot summer days or as a mixer for your favorite cocktails.',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1596803244618-8dea39d066a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Mexican drinks" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experience the Authentic Taste of Mexico
            </h1>
            <p className="text-xl mb-8">
              Discover our premium Mexican drinks crafted with a secret recipe
              passed down through generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-yellow-400 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-300 transition duration-200 flex items-center">
                Shop Now <ArrowRightIcon size={20} className="ml-2" />
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black transition duration-200">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Lightspeed?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our premium Mexican drinks are crafted with care using only the
              finest ingredients and our secret recipe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SparklesIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Secret Recipe</h3>
              <p className="text-gray-600">
                Our drinks are made with a secret recipe that has been passed
                down through generations, ensuring an authentic and unique
                taste.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Worldwide Availability</h3>
              <p className="text-gray-600">
                Enjoy our premium Mexican drinks no matter where you are. We
                distribute our products to stores worldwide.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBagIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients to create our drinks,
                ensuring a premium quality product that delights with every sip.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Featured Products
            </h2>
            <Link to="/products" className="text-black font-bold hover:text-yellow-600 transition duration-200 flex items-center">
              View All <ArrowRightIcon size={20} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => <ProductCard key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} image={product.image} />)}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Lightspeed was founded with a passion for sharing the authentic
                flavors of Mexico with the world. Our journey began with a
                secret recipe that has been passed down through generations.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we are proud to distribute our premium Mexican drinks to
                stores worldwide, bringing a taste of Mexico to customers across
                the globe.
              </p>
              <Link to="/about" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-200 inline-flex items-center">
                Learn More About Us{' '}
                <ArrowRightIcon size={20} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1618183507099-9fa4b335d4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Our story" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Social Media Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Follow Us on Social Media
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with our latest products, promotions, and events by
            following us on social media.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-white text-black p-4 rounded-full hover:bg-yellow-400 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="bg-white text-black p-4 rounded-full hover:bg-yellow-400 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="bg-white text-black p-4 rounded-full hover:bg-yellow-400 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <ContactForm />
    </div>;
};
export default Home;