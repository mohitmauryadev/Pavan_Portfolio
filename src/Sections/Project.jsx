import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Chatboard',
    description: 'An AI-powered chatboard where users can interact with intelligent bots to get instant responses and assistance on multiple topics. Built with React and AI integration.',
    image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/370720935/original/1d2ca3a2223955bbb2944128b493fdfe07490f07/develop-ai-chatbot-chatgpt-appointment-bot.png', // placeholder image
    link: '#',
  },
  {
    title: 'KisanMitra',
    description: 'A smart agriculture assistant for farmers providing crop recommendations, weather updates, and advisory services using AI and data analysis.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-concept-use-of-the-smart-farmer-system-came-to-help-analysis-image_15746624.jpg', // placeholder image
    link: '#',
  },
  {
    title: 'E-Commerce',
    description: 'A modern e-commerce platform featuring product listings, cart management, and payment integration. Built with React, Node.js, and Express.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/023/309/702/small/ai-generative-e-commerce-concept-shopping-cart-with-boxes-on-a-wooden-table-photo.jpg', // placeholder image
    link: '#',
  },
];

const Project = () => {
  return (
    <section id='projects' className="projects-section py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-600 mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
