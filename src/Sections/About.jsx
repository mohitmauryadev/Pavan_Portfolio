import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Briefcase, Award } from 'lucide-react';


const skills = [
  { name: 'Java', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'HTML / CSS / Bootstrap', level: 95 },
  { name: 'C / C++', level: 80 },
  { name: 'DSA', level: 80 },
];

const experienceData = [
  {
    role: 'Software Developer Intern',
    company: 'Tech Company XYZ',
    duration: 'Jan 2024 - Jun 2024',
    desc: 'Worked on web and mobile app development, optimizing performance and creating responsive UI with React and Tailwind.'
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Projects',
    duration: 'Mar 2023 - Present',
    desc: 'Contributed to open source projects in JavaScript and React, improving functionality and fixing bugs.'
  }
];

const About = () => {
  return (
    <section id='about' className="aboutSec py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="intro mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Hi, I am Pavan Kushwaha, a passionate Computer Science Engineering student at BBD University, Lucknow.
            I specialize in web and software development with a strong focus on clean code, modern frameworks, and responsive design.
            I love solving problems, building projects, and learning new technologies every day.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="skills mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="experience mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">{exp.role}</h4>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.company} | {exp.duration}</span>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements / Highlights */}
        <motion.div
          className="achievements"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Achievements & Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-8 h-8 text-indigo-600 mb-2" />
              <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Top Performer</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Awarded as Top Performer in coding competitions and hackathons.</p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-8 h-8 text-indigo-600 mb-2" />
              <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Open Source Contributor</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Contributed to multiple open source projects on GitHub.</p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
              <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Academic Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Consistently maintained top grades in programming and CS subjects.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
