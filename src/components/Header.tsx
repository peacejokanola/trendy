import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, ShoppingCartIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            LIGHTSPEED
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-400 transition duration-200">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition duration-200">
              About
            </Link>
            <Link to="/products" className="hover:text-yellow-400 transition duration-200">
              Products
            </Link>
            <Link to="/terms" className="hover:text-yellow-400 transition duration-200">
              Terms
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:text-yellow-400 transition duration-200">
              <ShoppingCartIcon size={20} />
            </button>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition duration-200">
              Shop Now
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-yellow-400 transition duration-200" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="hover:text-yellow-400 transition duration-200" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/products" className="hover:text-yellow-400 transition duration-200" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link to="/terms" className="hover:text-yellow-400 transition duration-200" onClick={() => setIsMenuOpen(false)}>
                Terms
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <button className="hover:text-yellow-400 transition duration-200">
                  <ShoppingCartIcon size={20} />
                </button>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition duration-200">
                  Shop Now
                </button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;