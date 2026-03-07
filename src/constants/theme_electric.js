// Electric/Cyberpunk Design System
export const ELECTRIC_THEME = {
  colors: {
    // Dark base
    bg: {
      primary: '#0a0a0f',
      secondary: '#111118',
      tertiary: '#1a1a24',
      elevated: '#222230',
    },
    // Electric accents
    neon: {
      green: '#00ff88',
      cyan: '#00d9ff',
      violet: '#bd00ff',
      pink: '#ff0080',
      yellow: '#ffeb3b',
    },
    // Functional colors
    text: {
      primary: '#ffffff',
      secondary: '#b4b4b8',
      muted: '#808088',
      accent: '#00ff88',
    },
    terminal: {
      green: '#00ff88',
      prompt: '#00d9ff',
      cursor: '#ff0080',
      error: '#ff3366',
      success: '#00ff88',
    },
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #00ff88 0%, #00d9ff 50%, #bd00ff 100%)',
    secondary: 'linear-gradient(90deg, #bd00ff 0%, #ff0080 100%)',
    electric: 'linear-gradient(45deg, #00d9ff, #00ff88, #bd00ff, #ff0080)',
    cyber: 'linear-gradient(180deg, rgba(0,255,136,0.1) 0%, rgba(189,0,255,0.1) 100%)',
    glow: 'radial-gradient(circle, rgba(0,255,136,0.2) 0%, transparent 70%)',
  },
  
  shadows: {
    neonGreen: '0 0 20px rgba(0,255,136,0.5), 0 0 40px rgba(0,255,136,0.3)',
    neonCyan: '0 0 20px rgba(0,217,255,0.5), 0 0 40px rgba(0,217,255,0.3)',
    neonViolet: '0 0 20px rgba(189,0,255,0.5), 0 0 40px rgba(189,0,255,0.3)',
    neonPink: '0 0 20px rgba(255,0,128,0.5), 0 0 40px rgba(255,0,128,0.3)',
    soft: '0 8px 32px rgba(0,0,0,0.4)',
    elevated: '0 16px 48px rgba(0,0,0,0.6)',
  },
  
  typography: {
    fonts: {
      main: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      display: "'Space Grotesk', 'Inter', sans-serif",
      accent: "'Orbitron', 'Space Grotesk', sans-serif",
    },
    sizes: {
      hero: 'clamp(3rem, 12vw, 8rem)',
      title: 'clamp(2rem, 6vw, 4rem)',
      subtitle: 'clamp(1.5rem, 4vw, 2.5rem)',
      body: '1.125rem',
      small: '0.875rem',
    },
  },
  
  animations: {
    glitch: {
      duration: '0.3s',
      timing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    float: {
      duration: '3s',
      timing: 'ease-in-out',
    },
    pulse: {
      duration: '2s',
      timing: 'ease-in-out',
    },
    scan: {
      duration: '4s',
      timing: 'linear',
    },
  },
  
  spacing: {
    section: 'clamp(4rem, 15vh, 10rem)',
    container: 'clamp(1rem, 5vw, 3rem)',
  },
};

// Animation variants for Framer Motion
export const ELECTRIC_ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },
  
  glitchIn: {
    initial: { 
      opacity: 0,
      x: [0, -5, 5, -5, 5, 0],
      filter: 'blur(4px)',
    },
    animate: { 
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
    },
    transition: { duration: 0.5 },
  },
  
  float: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};
