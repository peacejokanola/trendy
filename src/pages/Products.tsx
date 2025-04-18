import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
const Products = () => {
  const [filter, setFilter] = useState('all');
  // Sample products data
  const products = [{
    id: 'original',
    name: 'Original Blend',
    description: 'Our signature Mexican drink made with our secret recipe. A perfect balance of flavors that has delighted customers worldwide.',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'signature'
  }, {
    id: 'spicy',
    name: 'Spicy Edition',
    description: 'A bold twist on our classic recipe with an added kick of spice. For those who like their drinks with a bit more heat.',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1622543925917-763c34c31d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'signature'
  }, {
    id: 'citrus',
    name: 'Citrus Infusion',
    description: 'A refreshing blend with zesty citrus notes. Perfect for hot summer days or as a mixer for your favorite cocktails.',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1596803244618-8dea39d066a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    category: 'signature'
  }, {
    id: 'mango',
    name: 'Mango Fusion',
    description: 'Sweet, tropical mango blended with our signature recipe for a taste of paradise. A customer favorite during summer months.',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'fruit'
  }, {
    id: 'pineapple',
    name: 'Pineapple Paradise',
    description: 'The exotic taste of pineapple combined with our secret recipe. A tropical escape in every bottle.',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1587116287071-3841a3e46079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'fruit'
  }, {
    id: 'coconut',
    name: 'Coconut Dream',
    description: 'The smooth, creamy taste of coconut adds a delightful twist to our signature recipe. A vacation in a bottle.',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1610483178766-8092d96033f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'fruit'
  }, {
    id: 'limited-summer',
    name: 'Summer Edition',
    description: 'Our limited edition summer blend featuring a unique combination of tropical flavors. Available for a limited time only.',
    price: '$16.99',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'limited'
  }, {
    id: 'limited-holiday',
    name: 'Holiday Special',
    description: 'Celebrate the holiday season with our limited edition blend featuring festive spices and flavors. A perfect gift.',
    price: '$16.99',
    image: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'limited'
  }];
  const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1620219365994-f451bdb5f293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Our Products" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our premium Mexican drinks crafted with our secret recipe.
            From our signature blends to limited editions, there's something for
            everyone.
          </p>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setFilter('all')}>
                All Products
              </button>
              <button className={`px-6 py-2 rounded-full ${filter === 'signature' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setFilter('signature')}>
                Signature Blends
              </button>
              <button className={`px-6 py-2 rounded-full ${filter === 'fruit' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setFilter('fruit')}>
                Fruit Infusions
              </button>
              <button className={`px-6 py-2 rounded-full ${filter === 'limited' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setFilter('limited')}>
                Limited Editions
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map(product => <ProductCard key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} image={product.image} />)}
          </div>
        </div>
      </section>
      {/* Bulk Orders */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bulk Orders</h2>
              <p className="text-gray-300 mb-4">
                Looking to stock our products in your store or order in bulk for
                an event? We offer special pricing for bulk orders and can
                customize packages to meet your needs.
              </p>
              <p className="text-gray-300 mb-6">
                Contact our sales team to discuss your requirements and get a
                quote.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-300 transition duration-200">
                Contact Sales
              </button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Bulk orders" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Product FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our products? Find answers to our most
              frequently asked questions below.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                What ingredients are in your drinks?
              </h3>
              <p className="text-gray-600">
                While our exact recipe is a closely guarded secret, our drinks
                are made with premium ingredients including natural flavors and
                spices sourced from Mexico. All ingredients are listed on our
                product labels.
              </p>
            </div>
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Are your drinks alcoholic?
              </h3>
              <p className="text-gray-600">
                No, our standard products do not contain alcohol. However, they
                make excellent mixers for alcoholic beverages. We do offer some
                limited edition products that may contain alcohol, which are
                clearly labeled.
              </p>
            </div>
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Where can I buy your products?
              </h3>
              <p className="text-gray-600">
                Our products are available in major grocery stores and specialty
                beverage shops worldwide. You can also purchase directly from
                our website with shipping available to most countries.
              </p>
            </div>
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                How long do your products stay fresh?
              </h3>
              <p className="text-gray-600">
                Each bottle has a best-by date printed on it. Generally, our
                products stay fresh for 12 months when unopened. Once opened, we
                recommend consuming within 2 weeks and keeping refrigerated.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you offer samples?</h3>
              <p className="text-gray-600">
                Yes, we offer sample packs for first-time customers at a
                discounted rate. These sample packs include smaller versions of
                our signature blends to help you find your favorite.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Products;