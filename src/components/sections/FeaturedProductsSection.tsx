import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRightIcon } from 'lucide-react';
export const FeaturedProductsSection = () => {
  const products = [{
    id: 1,
    name: 'Classic Agave',
    description: 'Our signature drink with a secret recipe passed down through generations.',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 2,
    name: 'Spicy Mango',
    description: 'A perfect blend of sweet mango with a spicy kick for the adventurous.',
    price: '$22.99',
    image: 'https://images.unsplash.com/photo-1596392301391-76e0b7e88bd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 3,
    name: 'Citrus Blend',
    description: 'Refreshing citrus flavors with a smooth finish. Perfect for any occasion.',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-black">Featured Products</h2>
            <p className="text-gray-600 mt-2">
              Discover our most popular Mexican beverages
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Products
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-orange-500 font-bold">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>)}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline">
            View All Products
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>;
};