import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ELECTRIC_ANIMATIONS } from '../constants/theme_electric';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants/data';

const TransmissionContact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const contactMethods = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: 'neon-green',
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: null,
      color: 'neon-cyan',
    },
  ];
  
  const socialLinks = [
    { icon: faGithub, url: SOCIAL_LINKS.github?.url, label: 'GitHub' },
    { icon: faLinkedin, url: SOCIAL_LINKS.linkedin?.url, label: 'LinkedIn' },
  ].filter(link => link.url); // Only show links that exist
  
  return (
    <section className="transmission-contact" id="contact" ref={ref}>
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
          Open Channel
        </motion.div>
        <motion.h2
          className="section-title"
          variants={ELECTRIC_ANIMATIONS.scaleIn}
        >
          Transmission
        </motion.h2>
      </motion.div>
      
      <motion.div
        className="contact-container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={ELECTRIC_ANIMATIONS.staggerContainer}
      >
        {/* Terminal Window */}
        <motion.div
          className="contact-terminal"
          variants={ELECTRIC_ANIMATIONS.fadeInLeft}
        >
          <div className="terminal-header">
            <div className="terminal-button close" />
            <div className="terminal-button minimize" />
            <div className="terminal-button maximize" />
          </div>
          
          <div className="terminal-output">
            <div className="terminal-line">
              <span className="prompt">user@portfolio:~$</span>
              <span className="command">ping {PERSONAL_INFO.name.toLowerCase().replace(' ', '_')}</span>
            </div>
            <div className="terminal-line">
              <span className="output">&gt; Connection established...</span>
            </div>
            <div className="terminal-line">
              <span className="output">&gt; Status: ONLINE</span>
            </div>
            <div className="terminal-line">
              <span className="output">&gt; Ready to receive transmission</span>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Methods */}
        <motion.div
          className="contact-methods"
          variants={ELECTRIC_ANIMATIONS.fadeInRight}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              className={`contact-method ${method.color}`}
              variants={ELECTRIC_ANIMATIONS.fadeInUp}
              custom={index}
            >
              <div className="contact-icon">
                <FontAwesomeIcon icon={method.icon} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{method.label}</span>
                {method.href ? (
                  <a href={method.href} className="contact-value">
                    {method.value}
                  </a>
                ) : (
                  <span className="contact-value">{method.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          className="social-links"
          variants={ELECTRIC_ANIMATIONS.fadeInUp}
        >
          <div className="social-divider">
            <span>Connect on</span>
          </div>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                variants={ELECTRIC_ANIMATIONS.scaleIn}
                custom={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TransmissionContact;
