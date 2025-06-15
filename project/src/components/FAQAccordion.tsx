import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Blockchain PR?',
      answer: 'Blockchain PR involves strategic communication and media relations specifically tailored for cryptocurrency, blockchain, and Web3 projects. It focuses on building credibility, managing reputation, and communicating complex technical concepts to both technical and mainstream audiences.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary depending on the scope and goals of your campaign. Typically, you can expect to see initial engagement within 2-4 weeks, with significant growth and brand recognition developing over 3-6 months. Our team provides regular reports to track progress and adjust strategies as needed.'
    },
    {
      question: 'What makes your agency different from traditional marketing agencies?',
      answer: 'Our team has deep expertise in blockchain technology, cryptocurrency markets, and Web3 ecosystems. We understand the unique challenges of marketing in the crypto space, including regulatory considerations, community dynamics, and the technical nature of blockchain projects.'
    },
    {
      question: 'Do you work with projects of all sizes?',
      answer: 'Yes, we work with projects ranging from early-stage startups to established blockchain companies. Our services are scalable and can be customized to fit your budget and specific needs, whether you\'re launching a new token or expanding an existing platform.'
    },
    {
      question: 'How do you handle regulatory compliance in marketing?',
      answer: 'We stay current with evolving regulations across different jurisdictions and work closely with legal teams to ensure all marketing materials and campaigns comply with relevant laws. Our approach prioritizes transparency and regulatory compliance while maximizing marketing effectiveness.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is tailored to each project\'s specific needs and scope. We offer flexible packages ranging from consultation services starting at $99 to comprehensive full-service marketing campaigns. Contact us for a personalized quote based on your requirements.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0d1b17]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">
            Get answers to common questions about our blockchain marketing services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm rounded-xl border border-[#16f29b]/20 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#16f29b]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#16f29b]" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;