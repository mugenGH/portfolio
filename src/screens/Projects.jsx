import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles_professional.css';
import LoadingScreen from '../components/LoadingScreen';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../constants/seo';
import { PROJECTS } from '../constants/data';
import { Badge } from '../components/UIComponents';
import { usePageTracking, useEventTracking } from '../utils/analytics';

export default function Projects() {
  const [summary, setSummary] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [load, setLoad] = useState(true);

  // Analytics hooks
  usePageTracking('Projects');
  const { trackEvent } = useEventTracking();

  const handleLoad = () => {
    setLoad(false);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    trackEvent('project_view', { project_name: project.name });
  };

  const handleProjectLinkClick = (projectName, linkType) => {
    trackEvent('project_link_click', { 
      project_name: projectName,
      link_type: linkType 
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageTransition>
      <SEO
        title={SEO_CONFIG.projects.title}
        description={SEO_CONFIG.projects.description}
        keywords={SEO_CONFIG.projects.keywords}
      />

      <LoadingScreen isLoading={load} />

      <div className="spline-bg">
        <Spline onLoad={handleLoad} scene="https://prod.spline.design/nLhO62fW-frRO17y/scene.splinecode" />
      </div>

      <motion.div
        className="projects-page"
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
          Featured Projects
        </motion.h1>

        {/* Summary Panel */}
        <motion.div
          className="summary"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Project Details</h3>
          <AnimatePresence mode="wait">
            {summary ? (
              <motion.div
                key="summary-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="summary-content"
              >
                {summary}
              </motion.div>
            ) : (
              <motion.div
                key="summary-placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="summary-placeholder"
              >
                Hover over a project to see its details!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className={`porj ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setSummary(project.summary)}
              onMouseLeave={() => setSummary('')}
              onClick={() => handleProjectClick(project)}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(216, 167, 230, 0.4)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="featured-badge">
                  <FontAwesomeIcon icon={faStar} /> Featured
                </div>
              )}

              {/* Project Status */}
              <Badge variant={project.status === 'Live' ? 'success' : 'warning'}>
                {project.status}
              </Badge>

              {/* Project Content */}
              <h4 className="project-title">{project.name}</h4>
              <p className="project-tagline">{project.tagline}</p>

              {/* Technologies */}
              <div className="tech-stack">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="default">+{project.technologies.length - 3}</Badge>
                )}
              </div>

              {/* Project Links */}
              <div className="project-links">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectLinkClick(project.name, 'demo');
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>View Demo</span>
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn github-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectLinkClick(project.name, 'github');
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Code</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <h2>{selectedProject.name}</h2>
              <p className="modal-tagline">{selectedProject.tagline}</p>
              <p className="modal-description">{selectedProject.summary}</p>
              
              <div className="modal-section">
                <h3>Key Highlights</h3>
                <ul>
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="tech-stack">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
