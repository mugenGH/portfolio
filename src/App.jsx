import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles_professional.css';
import './App_new.css';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';
import SEO from './components/SEO';
import { SEO_CONFIG } from './constants/seo';
import { PERSONAL_INFO, SOCIAL_LINKS } from './constants/data';
import { usePageTracking } from './utils/analytics';

function App() {
  const [load, setLoad] = useState(true);
  
  // Track page views
  usePageTracking('Home');

  const handleLoad = () => {
    setLoad(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <PageTransition>
      <SEO
        title={SEO_CONFIG.home.title}
        description={SEO_CONFIG.home.description}
        keywords={SEO_CONFIG.home.keywords}
      />
      
      <div className="home">
        <LoadingScreen isLoading={load} />

        {/* 3D Background */}
        <motion.div
          className="bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: load ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <Spline onLoad={handleLoad} scene="https://prod.spline.design/Klwl2vxUdDGH9-or/scene.splinecode" />
        </motion.div>

        {/* Hero Introduction */}
        <motion.div
          className="intro"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="wave-emoji">👋</span>
          <h1>Hi, I'm {PERSONAL_INFO.name.split(' ')[0]}</h1>
          <p className="tagline">{PERSONAL_INFO.tagline}</p>
        </motion.div>

        {/* Navigation Content */}
        <motion.div
          className="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Navigation Links */}
          <motion.div className="box1" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link className="nav-link-home" to="/portfolio/about">
                <span className="link-text">ABOUT ME</span>
                <span className="link-arrow">→</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link className="nav-link-home" to="/portfolio/skills">
                <span className="link-text">SKILLS</span>
                <span className="link-arrow">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Projects Link */}
          <motion.div className="box2" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link className="nav-link-home projects-link" to="/portfolio/project">
                <span className="link-text">PROJECTS</span>
                <span className="link-arrow">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="box3" variants={itemVariants}>
            <motion.a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={SOCIAL_LINKS.github.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>

            <motion.a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={SOCIAL_LINKS.linkedin.label}
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
          }}
        >
          <span>Explore</span>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default App;
