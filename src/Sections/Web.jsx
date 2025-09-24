import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone } from 'lucide-react';

const skills = {
  web: [
    'HTML5, CSS3, JavaScript',
    'React.js, Redux',
    'Tailwind CSS, Bootstrap',
    'Node.js, Express.js',
    'REST APIs & JSON',
    'Git & GitHub',
  ],
  app: [
    'React Native / Expo',
    'Firebase Integration',
    'Cross-platform Apps (Android & iOS)',
    'Responsive UI & Performance Optimization',
    'API Integration',
    'Clean Architecture & Modular Code',
  ],
};

const Web = () => {
  return (
    <section className="web-section py-16 px-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-700 mb-16"
        >
          Web & App Development
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Web Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Code className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mt-12 text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
              Web Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              I create modern, responsive, and user-friendly websites. From static web pages to dynamic web applications, I focus on clean code, performance, SEO optimization, and seamless UX.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-gray-700 dark:text-gray-300 text-left">
              {skills.web.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">•</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* App Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Smartphone className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mt-12 text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
              App Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              I develop cross-platform mobile applications with clean architecture, smooth animations, and optimized performance. Apps are built for both Android and iOS using React Native and Firebase integration.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-gray-700 dark:text-gray-300 text-left">
              {skills.app.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">•</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Web;
