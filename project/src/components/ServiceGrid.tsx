import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Users, 
  Search, 
  Target, 
  MessageSquare, 
  TrendingUp,
  PenTool,
  Globe,
  BarChart3,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';

const ServiceGrid = () => {
  const services = [
    { icon: Megaphone, title: 'Content Marketing', description: 'Engaging content that resonates with crypto communities' },
    { icon: Users, title: 'Community Management', description: 'Build and nurture thriving blockchain communities' },
    { icon: Search, title: 'SEO Optimization', description: 'Rank higher for crypto and blockchain keywords' },
    { icon: Target, title: 'Strategic Planning', description: 'Data-driven marketing strategies for Web3 projects' },
    { icon: MessageSquare, title: 'PR & Media Relations', description: 'Get featured in top crypto publications' },
    { icon: TrendingUp, title: 'Growth Marketing', description: 'Scale your project with proven growth tactics' },
    { icon: PenTool, title: 'Brand Development', description: 'Create compelling brand identity for blockchain projects' },
    { icon: Globe, title: 'Global Outreach', description: 'Expand your reach across international markets' },
    { icon: BarChart3, title: 'Analytics & Reporting', description: 'Track and measure your marketing performance' },
    { icon: Zap, title: 'Influencer Marketing', description: 'Partner with top crypto influencers and thought leaders' },
    { icon: Shield, title: 'Reputation Management', description: 'Protect and enhance your project\'s reputation' },
    { icon: Rocket, title: 'Token Launch Support', description: 'End-to-end marketing for successful token launches' }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#050505] to-[#0f1c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Building Blocks</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive marketing solutions designed specifically for blockchain and cryptocurrency projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#0d1b17] border border-[#16f29b]/20 rounded-xl p-6 hover:border-[#16f29b]/40 transition-all duration-300 group"
            >
              <div className="mb-4">
                <service.icon className="w-8 h-8 text-[#16f29b] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;