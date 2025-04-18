import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRightIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="relative bg-black text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Experience the Authentic
              <span className="text-orange-500"> Mexican Spirit</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
              Discover our premium collection of Mexican beverages crafted with
              secret recipes and tradition. Available worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="text-lg px-8 py-3">Shop Products</Button>
              <Button variant="outline" className="text-lg px-8 py-3">
                Learn More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1613590928141-93e183343e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Lightspeed premium Mexican beverage" className="rounded-lg shadow-2xl w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl z-0"></div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-8 w-24 h-24 bg-green-500 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
    </section>;
};