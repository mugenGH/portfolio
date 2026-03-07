import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Reusable Card Component with Animations
 */
export const Card = ({ children, className = '', delay = 0, ...props }) => {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={`card ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Button Component with Hover Effects
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  ...props 
}) => {
  return (
    <motion.button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/**
 * Badge Component for Tags
 */
export const Badge = ({ children, variant = 'default' }) => {
  return (
    <motion.span
      className={`badge badge-${variant}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.span>
  );
};
