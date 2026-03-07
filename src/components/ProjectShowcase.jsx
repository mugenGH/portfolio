import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { ELECTRIC_ANIMATIONS } from '../constants/theme_electric';
import { PROJECTS } from '../constants/data';

const ProjectShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="projects-showcase" id="projects" ref={ref}>
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
          Featured Work
        </motion.div>
        <motion.h2
          className="section-title"
          variants={ELECTRIC_ANIMATIONS.scaleIn}
        >
          Projects
        </motion.h2>
      </motion.div>
      
      <motion.div
        className="projects-grid"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={ELECTRIC_ANIMATIONS.staggerContainer}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={ELECTRIC_ANIMATIONS.fadeInUp}
            custom={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Project Image Placeholder */}
            <div className="project-image-placeholder">
              <FontAwesomeIcon icon={faCode} />
            </div>
            
            {/* Project Content */}
            <div className="project-content">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>
                <span
                  className={`project-status ${
                    project.status?.toLowerCase() === 'live' ? 'live' : 'development'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.summary}</p>
              
              {/* Tech Stack */}
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link code"
                  >
                    <FontAwesomeIcon icon={faCode} /> View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectShowcase;
