import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LIGHTSPEED</h3>
            <p className="text-gray-400 mb-4">
              Premium Mexican drinks crafted with our secret recipe, available
              worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition duration-200">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition duration-200">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition duration-200">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/original" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  Original Blend
                </Link>
              </li>
              <li>
                <Link to="/products/spicy" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  Spicy Edition
                </Link>
              </li>
              <li>
                <Link to="/products/citrus" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  Citrus Infusion
                </Link>
              </li>
              <li>
                <Link to="/products/limited" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                  Limited Editions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>123 Beverage Blvd</p>
              <p>Mexico City, Mexico</p>
              <p className="mt-2">Email: info@lightspeed.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lightspeed Beverages. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;