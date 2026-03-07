import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ELECTRIC_ANIMATIONS } from '../constants/theme_electric';
import { SKILLS } from '../constants/data';

const TechArsenal = () => {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const categories = [
    { id: 'ai', label: 'AI & ML' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];
  
  const currentSkills = SKILLS[activeCategory] || [];
  
  return (
    <section className="tech-arsenal" id="skills" ref={ref}>
      <motion.div
        className="section-header"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={ELECTRIC_ANIMATIONS.staggerContainer}
      >
        <motion.div
          className="section-tag"
          variants={ELECTRIC_ANIMATIONS.fadeInUp}
        >
          Tech Stack
        </motion.div>
        <motion.h2
          className="section-title"
          variants={ELECTRIC_ANIMATIONS.scaleIn}
        >
          Arsenal
        </motion.h2>
      </motion.div>
      
      {/* Category Selector */}
      <motion.div
        className="tech-categories"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={ELECTRIC_ANIMATIONS.fadeInUp}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tech-category-btn ${
              activeCategory === category.id ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </motion.div>
      
      {/* Tech Grid */}
      <motion.div
        className="tech-grid"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={ELECTRIC_ANIMATIONS.staggerContainer}
        key={activeCategory} // Re-animate when category changes
      >
        {currentSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="tech-card"
            variants={ELECTRIC_ANIMATIONS.fadeInUp}
            custom={index}
          >
            <div className="tech-card-header">
              <h3 className="tech-name">{skill.name}</h3>
              <span className="tech-category-label">
                {skill.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechArsenal;
