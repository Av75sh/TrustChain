import React from 'react';
import { motion } from 'framer-motion';

const PartnersCarousel = () => {
  const partners = [
    'Binance', 'Coinbase', 'Ethereum', 'Solana', 'Polygon', 'Chainlink',
    'Uniswap', 'Aave', 'Compound', 'SwissBorg', 'Algorand', 'Cardano'
  ];

  return (
    <section className="py-16 bg-[#0d1b17] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400">We've helped hundreds of blockchain projects achieve their marketing goals</p>
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-12 whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/10"
              >
                <span className="text-white font-semibold text-lg">{partner}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;