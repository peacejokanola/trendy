import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { MenuIcon, XIcon, ShoppingCartIcon } from 'lucide-react';
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-white">LIGHT</span>
            <span className="text-orange-500">SPEED</span>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Products
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            About
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Contact
          </a>
        </nav>
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">
            <ShoppingCartIcon className="h-5 w-5 mr-1" />
            Cart (0)
          </Button>
          <Button>Shop Now</Button>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-orange-400 py-2 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-orange-400 py-2 transition-colors">
              Products
            </a>
            <a href="#" className="text-white hover:text-orange-400 py-2 transition-colors">
              About
            </a>
            <a href="#" className="text-white hover:text-orange-400 py-2 transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" className="w-full">
                <ShoppingCartIcon className="h-5 w-5 mr-1" />
                Cart (0)
              </Button>
              <Button className="w-full">Shop Now</Button>
            </div>
          </div>
        </div>}
    </header>;
};