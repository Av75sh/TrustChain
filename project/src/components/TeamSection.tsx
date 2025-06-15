import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Github } from 'lucide-react';
import avinash from "../components/images/linkedin pic2 - Copy.png";
import aman from "../components/images/aman.jpg";
import ritik from "../components/images/ritik.jpg";
import ankit from "../components/images/ankit.jpg";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Avinash Singh',
      role: 'Chief Executive Officer',
      image: avinash,
      bio: 'Former head of marketing at major crypto exchanges with 8+ years in blockchain industry.',
      linkedin: 'https://www.linkedin.com/in/avinash-singh75/',
      Github: 'https://github.com/Av75sh'
    },
    {
      name: 'Ankit Yadav',
      role: 'Chief Technology Officer',
      image: ankit,
      bio: 'Blockchain developer and technical strategist with expertise in DeFi and Web3 protocols.',
      linkedin: 'https://www.linkedin.com/in/2050ankitkumaryadav/',
      Github: 'https://github.com/Ankit420H'
    },
    {
      name: 'Aman Gupta',
      role: 'Head of Strategy',
      image: aman,
      bio: 'Strategic marketing expert specializing in cryptocurrency and blockchain project launches.',
      linkedin: 'https://www.linkedin.com/in/aman-guptaa-/',
      Github: 'https://github.com/Amangupta81'
    },
    {
      name: 'Ritik Singh',
      role: 'Creative Director',
      image: ritik,
      bio: 'Award-winning creative director with a passion for innovative blockchain marketing campaigns.',
      linkedin: 'https://www.linkedin.com/in/ritik6171/',
      Github: 'https://www.linkedin.com/in/ritik6171/'
    }
  ];

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const visibleMembers = [
    teamMembers[currentIndex],
    teamMembers[(currentIndex + 1) % teamMembers.length],
    teamMembers[(currentIndex + 2) % teamMembers.length],
    teamMembers[(currentIndex + 3) % teamMembers.length]
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#050505] to-[#0f1c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Industry experts dedicated to driving success for blockchain and cryptocurrency projects
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {visibleMembers.map((member, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0d1b17] rounded-xl overflow-hidden border border-[#16f29b]/20 hover:border-[#16f29b]/40 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-[#16f29b] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex space-x-3">
                      <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#16f29b]/20 rounded-lg hover:bg-[#16f29b]/30 transition-colors duration-200">
                      <Linkedin className="w-4 h-4 text-[#16f29b]" />
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={member.Github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#16f29b]/20 rounded-lg hover:bg-[#16f29b]/30 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 text-[#16f29b]" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevMember}
              className="p-3 bg-[#16f29b]/20 rounded-full hover:bg-[#16f29b]/30 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-[#16f29b]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextMember}
              className="p-3 bg-[#16f29b]/20 rounded-full hover:bg-[#16f29b]/30 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-[#16f29b]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;