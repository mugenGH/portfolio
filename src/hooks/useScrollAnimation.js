import { useInView } from 'react-intersection-observer';

/**
 * Custom hook for scroll-based animations
 * Uses Intersection Observer API for performance
 */
export const useScrollAnimation = (options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px',
    ...options,
  };

  const { ref, inView } = useInView(defaultOptions);

  return { ref, inView };
};

/**
 * Hook for staggered animations
 */
export const useStaggerAnimation = (itemCount, delayPerItem = 0.1) => {
  const animations = [];
  
  for (let i = 0; i < itemCount; i++) {
    animations.push({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: i * delayPerItem },
    });
  }

  return animations;
};
