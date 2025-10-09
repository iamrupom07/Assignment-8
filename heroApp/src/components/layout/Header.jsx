import { NavLink, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Logo from "../../photo/logo.png";

const Header = () => {
  const activeStyle = {
    color: "#8B5CF6",
    fontWeight: "600",
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center font-bold gap-2 text-2xl w-12">
          <img src={Logo} alt="" /> <p>HERO.IO</p>
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Installation
            </NavLink>
          </li>
        </ul>
        <a
          href="https://github.com/iamrupom07"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#7B3FFF] to-[#A365FF] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold"
        >
          <FaGithub />
          <span>Contribute</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
