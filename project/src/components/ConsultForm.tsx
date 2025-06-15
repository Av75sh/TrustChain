import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, Send } from 'lucide-react';

const ConsultForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const features = [
    {
      icon: Clock,
      title: 'Free 30-min Consultation',
      description: 'Get expert advice tailored to your project'
    },
    {
      icon: DollarSign,
      title: 'No Hidden Costs',
      description: 'Transparent pricing with no surprises'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Personal account manager for your success'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-[#0d1b17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Consult For Free</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to accelerate your blockchain project? Get started with a free consultation from our experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#16f29b]/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#16f29b]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#16f29b]/10 to-[#f7931a]/10 rounded-xl p-6 border border-[#16f29b]/20">
              <h4 className="text-lg font-semibold text-white mb-2">🎯 Starting at ₹199</h4>
              <p className="text-gray-400">Complete marketing audit and strategy consultation</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-[#16f29b]/20">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#16f29b] focus:ring-2 focus:ring-[#16f29b]/20 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#16f29b] focus:ring-2 focus:ring-[#16f29b]/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Project
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#16f29b] focus:ring-2 focus:ring-[#16f29b]/20 transition-all duration-200"
                    placeholder="Your company or project name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#16f29b] focus:ring-2 focus:ring-[#16f29b]/20 transition-all duration-200 resize-none"
                    placeholder="Describe your project and marketing goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-[#16f29b] text-black rounded-lg font-semibold text-lg hover:bg-[#14d88a] transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultForm;