import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#services' },
    { name: 'Services', href: '#services' },
    { name: 'Partners', href: '#blog' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[#16f29b] to-[#f7931a] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">TC</span>
            </div>
            <span className="text-white font-bold text-xl">TrustChain</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-[#16f29b] transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-[#16f29b] text-[#16f29b] rounded-lg hover:bg-[#16f29b] hover:text-black transition-all duration-200"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#16f29b] text-black rounded-lg font-semibold hover:bg-[#14d88a] transition-colors duration-200"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-[#16f29b] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <button className="px-4 py-2 border border-[#16f29b] text-[#16f29b] rounded-lg hover:bg-[#16f29b] hover:text-black transition-all duration-200">
                Login
              </button>
              <button className="px-6 py-2 bg-[#16f29b] text-black rounded-lg font-semibold hover:bg-[#14d88a] transition-colors duration-200">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;