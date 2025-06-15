import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import shivraj from "../components/images/shivraj.jpg";
import shrey from "../components/images/shrey.jpg";
import bighnesh from "../components/images/Screenshot 2025-06-15 002445.png";


const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Shivraj Jaiswal',
      role: 'CEO, DeFiTech',
      image: shivraj,
      quote: 'BlockChain PR transformed our marketing strategy. Their deep understanding of the crypto space and innovative approach helped us reach new heights in user adoption.',
      rating: 5
    },
    {
      name: 'Bighnes Kumar Sahoo',
      role: 'Founder, CryptoVault',
      image: bighnesh,
      quote: 'The team delivered exceptional results across all channels. Our token launch was a massive success thanks to their strategic PR and marketing expertise.',
      rating: 5
    },
    {
      name: 'Shrey Garg',
      role: 'CMO, Web3 Innovations',
      image: shrey,
      quote: 'Working with BlockChain PR was a game-changer. Their comprehensive approach to community building and media relations exceeded all our expectations.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#e63946] to-[#f7931a] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-white/80">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;