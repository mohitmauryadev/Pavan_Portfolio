import React from 'react';
import { motion } from 'framer-motion';
import './Customer.css'; // optional styling

const customers = [
  {
    name: 'Rohit Sharma',
    role: 'Farmer - KisanMitra',
    testimonial: 'KisanMitra ne meri fasal ke liye perfect guidance di! Application simple aur easy to use hai.',
    image: 'https://www.shutterstock.com/image-photo/handsome-successful-indian-man-stylish-260nw-1257746860.jpg',
  },
  {
    name: 'Anjali Verma',
    role: 'Student - AI Chatboard',
    testimonial: 'AI Chatboard se mujhe programming questions ke answers instantly mile. Truly amazing tool!',
    image: 'https://media.istockphoto.com/id/1308610989/photo/shot-of-a-young-female-call-center-agent-working-in-office-stock-photo.jpg?s=612x612&w=0&k=20&c=VuZKacVVEPw0M_AtoBgdC-nFVvJBqvQYKcjFAdN6C7c=',
  },
  {
    name: 'Vikas Gupta',
    role: 'Shop Owner - E-Commerce',
    testimonial: 'E-Commerce platform easy to manage hai aur smooth shopping experience deta hai.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm43I8sO2k88-eE815OKjyN08dPA-s4cQsDA&s',
  },
   {
    name: 'Mohit Maurya',
    role: 'Farmer - Portfolio',
    testimonial: 'A portfolio website that showcases my work and skills in a visually appealing and user-friendly manner.',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHYqoxkmsm_DQ/profile-displayphoto-scale_200_200/B56ZhsNtRVHMAc-/0/1754162191552?e=2147483647&v=beta&t=ICpZVQhICf00i8p4NCppyUhz6zsNKPY_VdRJ41A68mE',
  },
  {
    name: 'Anil Verma',
    role: 'Student - AI Chatboard',
    testimonial: 'AI Chatboard se mujhe programming questions ke answers instantly mile. Truly amazing tool!',
    image: 'https://media.gettyimages.com/id/1064166444/video/handsome-male-college-student-outdoors-on-campus.jpg?s=640x640&k=20&c=-7fGA6dw7_lWBNmTMz4Hinx75_eS5rb0gftvZ088go8=',
  },
  {
    name: 'Khusboo Gupta',
    role: 'Shop Owner - E-Commerce',
    testimonial: 'E-Commerce platform easy to manage hai aur smooth shopping experience deta hai.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/049/930/831/small/indian-woman-customer-support-executive-assisting-clients-photo.jpeg',
  },
];

const Customer = () => {
  return (
    <section className="customer-section py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-600 mb-12"
        >
          What Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="customer-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-600"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{customer.name}</h3>
              <span className="text-sm text-indigo-600">{customer.role}</span>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">{customer.testimonial}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customer;
