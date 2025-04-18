import React from 'react';
import { Button } from '../ui/Button';
import { CheckIcon } from 'lucide-react';
export const AboutSection = () => {
  const features = ['Authentic Mexican recipes', 'Premium quality ingredients', 'Sustainable production practices', 'Global distribution network', 'Award-winning flavors'];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1577128178980-7c6a184ec3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Lightspeed production facility" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-black">
              About Lightspeed
            </h2>
            <p className="text-gray-700 mb-6">
              Founded with a passion for authentic Mexican flavors, Lightspeed
              has been crafting premium beverages using secret family recipes
              passed down through generations. Our commitment to quality and
              tradition has made us a global leader in the beverage industry.
            </p>
            <p className="text-gray-700 mb-8">
              Every bottle of Lightspeed carries the rich heritage of Mexico,
              carefully blended with modern production techniques to deliver an
              unmatched taste experience to our customers worldwide.
            </p>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => <li key={index} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>)}
              </ul>
            </div>
            <Button>Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>;
};