import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import gaming from "../components/images/gaming2.jpg"

const BlogPosts = () => {
  const posts = [
    {
      title: 'Crypto 2024: A New Era of Digital Asset Marketing',
      excerpt: 'Explore the latest trends and strategies shaping cryptocurrency marketing in 2024.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      date: 'March 15, 2024',
      category: 'Strategy'
    },
    {
      title: 'AI Integration in Blockchain: Marketing Opportunities',
      excerpt: 'How artificial intelligence is revolutionizing blockchain project marketing.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      date: 'March 10, 2024',
      category: 'Technology'
    },
    {
      title: 'Blockchain Gaming: The Next Marketing Frontier',
      excerpt: 'Understanding the unique marketing challenges and opportunities in Web3 gaming.',
      image: gaming,
      date: 'March 8, 2024',
      category: 'Gaming'
    },
    {
      title: 'The Evolution of DeFi: Marketing Lessons Learned',
      excerpt: 'Key insights from successful DeFi project launches and community building.',
      image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&h=400&fit=crop',
      date: 'March 5, 2024',
      category: 'DeFi'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-[#050505] to-[#0f1c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From Our Blog</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and strategies in blockchain marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0d1b17] rounded-xl overflow-hidden border border-[#16f29b]/20 hover:border-[#16f29b]/40 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#16f29b] text-black text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-[#16f29b] font-medium text-sm group-hover:text-[#14d88a] transition-colors duration-200"
                >
                  <span>View Article</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-[#16f29b] text-[#16f29b] rounded-lg font-semibold hover:bg-[#16f29b] hover:text-black transition-all duration-200"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPosts;