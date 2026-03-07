import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ELECTRIC_ANIMATIONS } from '../constants/theme_electric';
import { PERSONAL_INFO } from '../constants/data';

const TerminalHero = () => {
  const [typingText, setTypingText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Builder', 'Architect', 'Problem Solver'];
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 1000 : 2000;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typingText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && typingText === '') {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        // Type or delete character
        setTypingText(
          isDeleting
            ? currentRole.substring(0, typingText.length - 1)
            : currentRole.substring(0, typingText.length + 1)
        );
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, currentRoleIndex]);
  
  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
  }));
  
  return (
    <section className="hero-section">
      {/* Animated Grid Background */}
      <div className="grid-background" />
      
      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={ELECTRIC_ANIMATIONS.staggerContainer}
      >
        {/* Terminal Window */}
        <motion.div
          className="hero-terminal"
          variants={ELECTRIC_ANIMATIONS.fadeInUp}
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-button close" />
            <div className="terminal-button minimize" />
            <div className="terminal-button maximize" />
          </div>
          
          {/* Terminal Output */}
          <div className="terminal-output">
            <div className="terminal-line">
              <span className="prompt">user@portfolio:~$</span>
              <span className="command">whoami</span>
            </div>
            <div className="terminal-line">
              <span className="output">&gt; {PERSONAL_INFO.name}</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">user@portfolio:~$</span>
              <span className="command">cat role.txt</span>
            </div>
            <div className="terminal-line">
              <span className="output">&gt; Full-Stack Software Engineer</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">user@portfolio:~$</span>
              <span className="command">./execute_magic.sh</span>
            </div>
            <div className="terminal-line">
              <span className="output">&gt; Initializing awesomeness...</span>
            </div>
          </div>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1
          className="hero-title"
          variants={ELECTRIC_ANIMATIONS.scaleIn}
        >
          {PERSONAL_INFO.name.split(' ')[0]}
        </motion.h1>
        
        {/* Typing Effect */}
        <motion.div
          className="typing-effect"
          variants={ELECTRIC_ANIMATIONS.fadeInUp}
        >
          <span className="typing-text">{typingText}</span>
          <span className="cursor" />
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="hero-cta"
          variants={ELECTRIC_ANIMATIONS.fadeInUp}
        >
          <a href="#projects" className="cta-button primary">
            View Projects
          </a>
          <a href="#contact" className="cta-button secondary">
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TerminalHero;
