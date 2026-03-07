import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import '../styles_professional.css';
import LoadingScreen from '../components/LoadingScreen';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../constants/seo';
import { ABOUT_TEXT, PERSONAL_INFO, SKILLS } from '../constants/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageTracking } from '../utils/analytics';

export default function AboutMe() {
  const [load, setLoad] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  
  // Track page views
  usePageTracking('About Me');
  
  const { ref: skillsRef, inView: skillsInView } = useScrollAnimation();

  const handleLoad = () => {
    setLoad(false);
    
    // Typewriter effect for about text
    let index = 0;
    const interval = setInterval(() => {
      if (index <= ABOUT_TEXT.length) {
        setDisplayedText(ABOUT_TEXT.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageTransition>
      <SEO
        title={SEO_CONFIG.about.title}
        description={SEO_CONFIG.about.description}
        keywords={SEO_CONFIG.about.keywords}
      />

      <LoadingScreen isLoading={load} />

      <div className="spline-bg">
        <Spline onLoad={handleLoad} scene="https://prod.spline.design/igNH797Idt2bO1fF/scene.splinecode" />
      </div>

      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* About Content */}
        <motion.div
          className="abtcont"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h1>
          
          <motion.div className="about-text">
            {displayedText}
            <motion.span
              className="cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            className="highlights-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="highlight-card" variants={itemVariants}>
              <h3>🎓 Education</h3>
              <p>Final Year CSE Student</p>
              <span className="highlight-detail">Computer Science Engineering</span>
            </motion.div>

            <motion.div className="highlight-card" variants={itemVariants}>
              <h3>💼 Focus Areas</h3>
              <p>Full-Stack Development</p>
              <span className="highlight-detail">Web & Mobile Applications</span>
            </motion.div>

            <motion.div className="highlight-card" variants={itemVariants}>
              <h3>🌏 Languages</h3>
              <p>{PERSONAL_INFO.languages.join(', ')}</p>
              <span className="highlight-detail">JLPT N3 Certified</span>
            </motion.div>

            <motion.div className="highlight-card" variants={itemVariants}>
              <h3>🎯 Goal</h3>
              <p>Work in Japan</p>
              <span className="highlight-detail">Contribute to cutting-edge tech</span>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            ref={skillsRef}
            className="quick-stats"
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h2 className="stats-title">Quick Stats</h2>
            <div className="stats-grid">
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">
                  {SKILLS.frontend.length + SKILLS.backend.length + SKILLS.tools.length}+
                </span>
                <span className="stat-label">Skills Mastered</span>
              </motion.div>

              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Built</span>
              </motion.div>

              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Coding</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
