import React from 'react';
import connection from '../assets/Images/connection.png';
import Education from '../assets/Images/Education.png';
import Experiance from '../assets/Images/Experiance.png';
import { motion } from 'framer-motion';
// import './Connections.css'; // optional for extra styling

const connectionsData = [
  {
    title: '500+ Professional Connections',
    img: connection,
    desc: 'With a strong network of 500+ professional connections, I actively engage with developers, mentors, and tech leaders, expanding my knowledge, sharing ideas, and staying updated with industry trends and opportunities.'
  },
  {
    title: '2+ Years of Experience',
    img: Education,
    desc: "With hands-on experience in software development, I've built web and mobile applications using modern frameworks. I excel in Java, JavaScript, and React, focusing on clean code, performance, and user-centric design."
  },
  {
    title: 'Education',
    img: Experiance,
    desc: "Pursuing a B.Tech in Computer Science Engineering at BBD University, Lucknow, I've gained a strong foundation in programming, data structures, algorithms, and software development through practical projects and academic excellence."
  }
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const Connections = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="conSec flex flex-wrap w-[90%] justify-center items-center gap-8 m-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {connectionsData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            className="connCard flex flex-col w-[300px] text-center justify-center items-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <h1 className="CardH text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{card.title}</h1>
            <img
              src={card.img}
              alt={card.title}
              className="rounded-full w-[200px] h-[200px] object-cover border-4 border-indigo-100 dark:border-indigo-900 shadow-md mb-4"
            />
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Connections;
