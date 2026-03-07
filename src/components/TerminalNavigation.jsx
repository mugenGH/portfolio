import { useState } from 'react';
import { motion } from 'framer-motion';

const TerminalNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'home', href: '#home' },
    { id: 'skills', label: 'skills', href: '#skills' },
    { id: 'projects', label: 'projects', href: '#projects' },
    { id: 'experience', label: 'experience', href: '#experience' },
    { id: 'contact', label: 'contact', href: '#contact' },
  ];
  
  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="terminal-nav">
      <div className="terminal-nav-container">
        {/* Terminal Prompt */}
        <div className="terminal-prompt">
          <span className="prompt-symbol">&gt;</span>
          <span>portfolio.exe</span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? '[X]' : '[≡]'}
        </button>
      </div>
    </nav>
  );
};

export default TerminalNavigation;
