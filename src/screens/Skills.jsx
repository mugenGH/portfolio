import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import '../styles_professional.css';
import LoadingScreen from '../components/LoadingScreen';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../constants/seo';
import { SKILLS } from '../constants/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageTracking } from '../utils/analytics';

export default function Skills() {
  const [load, setLoad] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ai');
  
  // Track page views
  usePageTracking('Skills');
  
  const { ref: skillsRef, inView: skillsInView } = useScrollAnimation();

  const handleLoad = () => {
    setLoad(false);
  };

  const categories = [
    { id: 'ai',       label: 'AI & ML',        emoji: '🤖' },
    { id: 'frontend', label: 'Frontend',        emoji: '🎨' },
    { id: 'backend',  label: 'Backend',         emoji: '⚙️' },
    { id: 'tools',    label: 'Tools & Others',  emoji: '🛠️' },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <SEO
        title={SEO_CONFIG.skills.title}
        description={SEO_CONFIG.skills.description}
        keywords={SEO_CONFIG.skills.keywords}
      />

      <LoadingScreen isLoading={load} />

      <div className="spline-bg">
        <Spline onLoad={handleLoad} scene="https://prod.spline.design/nJgaKgbmLGDKa-S0/scene.splinecode" />
      </div>

      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Skills & Expertise
        </motion.h1>

        {/* Category Tabs */}
        <motion.div
          className="category-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tab-emoji">{category.emoji}</span>
              <span className="tab-label">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={skillsRef}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? 'visible' : 'hidden'}
          key={activeCategory}
        >
          {(SKILLS[activeCategory] ?? []).map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(216, 167, 230, 0.3)' }}
            >
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="summary-text">
            Currently working as an AI Engineer in Japan — building LLM-powered systems,
            text-to-SQL pipelines, and browser automation agents, while staying sharp across
            the full stack.
          </p>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}