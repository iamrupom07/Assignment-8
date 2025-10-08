// src/components/layout/Header.jsx
import { NavLink, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const activeStyle = {
    color: '#8B5CF6',
    fontWeight: '600',
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          AppVerse
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          <li><NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink></li>
          <li><NavLink to="/apps" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Apps</NavLink></li>
          <li><NavLink to="/installation" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Installation</NavLink></li>
        </ul>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors">
          <FaGithub />
          <span>Contribute</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;