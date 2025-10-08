// src/components/layout/Footer.jsx
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold">AppVerse</Link>
          <p className="text-sm text-gray-400 mt-1">Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Social Links</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-purple-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-purple-400"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;