import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useIsMobile } from '../hooks/useMediaQuery';

/**
 * Professional Navigation Component
 */
const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { path: '/portfolio', label: 'Home', icon: faHome },
    { path: '/portfolio/about', label: 'About', icon: faUser },
    { path: '/portfolio/skills', label: 'Skills', icon: faCode },
    { path: '/portfolio/project', label: 'Projects', icon: faBriefcase },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className="navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              aria-label={item.label}
            >
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              {!isMobile && <span className="nav-label">{item.label}</span>}
              {isActive(item.path) && (
                <motion.div
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
