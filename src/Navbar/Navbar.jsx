import React, { useState } from 'react';
import './Navbar.css';
import mylogo from '../assets/vk icon.png';
import { useTheme } from '../common/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <a href='#hero'><img src={mylogo} alt="Logo" /></a>
      </div>
      
    </nav>
  );
};

export default Navbar;