import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Trophy, Layers } from 'lucide-react';
import avinash from "../components/images/linkedin pic2 - Copy.png";
import aman from "../components/images/aman.jpg";
import ritik from "../components/images/ritik.jpg";
import ankit from "../components/images/ankit.jpg";


const UniqueAngles = () => {
  const angles = [
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Complete visibility into our processes, metrics, and results. We believe in building trust through openness.'
    },
    {
      icon: Trophy,
      title: 'Guaranteed Results',
      description: 'Our proven track record speaks for itself. We deliver measurable outcomes that drive real business growth.'
    },
    {
      icon: Layers,
      title: 'Full-Stack Marketing',
      description: 'From strategy to execution, we handle every aspect of your marketing needs under one roof.'
    }
  ];

  const teamImages = [
    avinash,
    ankit,
    aman,
    ritik
  ];

  return (
    <section className="py-20 bg-[#0d1b17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-4xl font-bold text-white mb-12">Our Unique Angles</h2>
            
            <div className="relative">
              {/* Overlapping team images */}
              <div className="flex items-center space-x-4">
                {teamImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="relative"
                    style={{ marginLeft: index > 0 ? '-20px' : '0' }}
                  >
                    <img
                      src={image}
                      alt={`Team member ${index + 1}`}
                      className="w-20 h-20 rounded-full border-4 border-[#16f29b] object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative background shapes */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-[#16f29b]/20 to-[#f7931a]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-[#f7931a]/20 to-[#e63946]/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {angles.map((angle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#16f29b]/20 rounded-lg flex items-center justify-center group-hover:bg-[#16f29b]/30 transition-colors duration-300">
                  <angle.icon className="w-6 h-6 text-[#16f29b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{angle.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{angle.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniqueAngles;