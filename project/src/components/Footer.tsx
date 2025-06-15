import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const eventImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=200&h=200&fit=crop'
  ];

  return (
    <footer className="bg-black/90 border-t border-[#16f29b]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#16f29b] to-[#f7931a] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">TC</span>
              </div>
              <span className="text-white font-bold text-xl">TrustChain</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading blockchain marketing agency specializing in Web3, crypto, and DeFi project growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-[#16f29b]/20 rounded-lg hover:bg-[#16f29b]/30 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#16f29b]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#16f29b] mt-0.5" />
                <div>
                  <p className="text-gray-400">hello@trustchain.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#16f29b] mt-0.5" />
                <div>
                  <p className="text-gray-400">+91 75280 60418 </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#16f29b] mt-0.5" />
                <div>
                  <p className="text-gray-400">
                    Bsf campus <br />
                    Jalandhar, Punjab 144006
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {['About Us', 'Services', 'Case Studies', 'Blog', 'Careers', 'Contact'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-[#16f29b] transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Recent Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Recent Events</h3>
            <div className="grid grid-cols-2 gap-3">
              {eventImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={image}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#16f29b]/20 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 TrustChain  All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;