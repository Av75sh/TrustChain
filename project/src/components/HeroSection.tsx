import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0f1c16] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#16f29b]/10 to-[#f7931a]/10"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">WORLD'S LEADING</span>
              <br />
              <span className="bg-gradient-to-r from-[#16f29b] via-[#f7931a] to-[#e63946] bg-clip-text text-transparent">
                BLOCKCHAIN
              </span>
              <br />
              <span className="text-white">PR &</span>{' '}
              <span className="text-[#f7931a]">Marketing</span>{' '}
              <span className="text-white">Firm</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We provide cutting-edge marketing and PR solutions for blockchain, crypto, and Web3 projects. 
            From community building to media relations, we accelerate your project's growth with proven strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#16f29b] text-black rounded-lg font-semibold text-lg hover:bg-[#14d88a] transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Consult for Free</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#f7931a] text-white rounded-lg font-semibold text-lg hover:bg-[#e6851a] transition-colors duration-200 flex items-center space-x-2"
            >
              <Play size={20} />
              <span>See Our Work</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;