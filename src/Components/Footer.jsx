import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0A171A] via-gray-800 to-gray-900 text-white px-10 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Me */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className=" text-white">
            I'm Pavan Kushwaha, a passionate web and app developer. I love creating modern, fast, and user-friendly digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="#resume" className="hover:text-white transition">Resume</a></li>
   </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Connect</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com" target="_blank" className="hover:text-gray-400"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="mailto:yourmail@example.com" className="hover:text-red-400"><FaEnvelope /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-300"><FaTwitter /></a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300">Email: pavankushwaha@gmail.com</p>
          <p className="text-gray-300">Phone: ‪+91 7800874042‬</p>
          <p className="text-gray-300">Location: Lucknow, India</p>
        </div>
      </div>
   {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pavan Kushwaha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;