import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants/data';

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ─── Dot indicator ────────────────────────────────────────────────────────────
function TimelineDot({ color = 'var(--neon-green)', active = false }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {active && (
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: color,
            opacity: 0.3,
          }}
        />
      )}
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}55`,
          border: '2px solid var(--bg-primary)',
          zIndex: 1,
        }}
      />
    </div>
  );
}

// ─── Single experience card ───────────────────────────────────────────────────
function ExperienceCard({ item, index, isActive }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const accentColor = isActive
    ? 'var(--neon-green)'
    : index % 2 === 0
    ? 'var(--neon-cyan)'
    : 'var(--neon-violet)';

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}
    >
      {/* Left: dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 4 }}>
        <TimelineDot color={accentColor} active={isActive} />
        {index < EXPERIENCE.length - 1 && (
          <motion.div
            variants={lineGrow}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              width: 2,
              flex: 1,
              minHeight: 48,
              marginTop: 6,
              background: `linear-gradient(to bottom, ${accentColor}88, transparent)`,
              transformOrigin: 'top',
            }}
          />
        )}
      </div>

      {/* Right: card */}
      <motion.div
        whileHover={{ scale: 1.015, boxShadow: `0 0 24px ${accentColor}33` }}
        transition={{ duration: 0.2 }}
        style={{
          flex: 1,
          background: 'var(--bg-secondary)',
          border: `1px solid ${accentColor}44`,
          borderRadius: 12,
          padding: '1.25rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, ${accentColor}, transparent)`,
          }}
        />

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
              {item.role}
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: accentColor, fontFamily: 'JetBrains Mono, monospace' }}>
              {item.organization}
            </p>
          </div>
          <span
            style={{
              fontSize: '0.75rem',
              padding: '3px 10px',
              borderRadius: 20,
              border: `1px solid ${accentColor}66`,
              color: accentColor,
              background: `${accentColor}11`,
              fontFamily: 'JetBrains Mono, monospace',
              whiteSpace: 'nowrap',
            }}
          >
            {item.period}
          </span>
        </div>

        {/* Description */}
        <p style={{ margin: '0.5rem 0 0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {item.description}
        </p>

        {/* Achievements */}
        <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          {item.achievements.map((ach, i) => (
            <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              <span style={{ color: accentColor, marginRight: 4 }}>›</span>
              {ach}
            </li>
          ))}
        </ul>

        {/* Active badge */}
        {isActive && (
          <div style={{ marginTop: '0.75rem' }}>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                fontSize: '0.7rem',
                padding: '2px 8px',
                borderRadius: 4,
                background: 'var(--neon-green)22',
                border: '1px solid var(--neon-green)66',
                color: 'var(--neon-green)',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: 1,
              }}
            >
              ● CURRENT
            </motion.span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Education + Cert compact cards ──────────────────────────────────────────
function CompactCard({ title, subtitle, period, tags = [], accent = 'var(--neon-cyan)', index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.02 }}
      style={{
        background: 'var(--bg-secondary)',
        border: `1px solid ${accent}33`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: 10,
        padding: '1rem 1.25rem',
        marginBottom: '1rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem' }}>
        <div>
          <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
          <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: accent, fontFamily: 'JetBrains Mono, monospace' }}>{subtitle}</p>
        </div>
        {period && (
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{period}</span>
        )}
      </div>
      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 4, background: `${accent}11`, border: `1px solid ${accent}33`, color: 'var(--text-muted)' }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionHeading({ label, accent }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <p style={{ margin: '0 0 4px', fontSize: '0.72rem', color: accent, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 2, textTransform: 'uppercase' }}>
        // {label}
      </p>
      <div style={{ width: 40, height: 2, background: `linear-gradient(90deg, ${accent}, transparent)`, borderRadius: 2 }} />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ExperienceTimeline() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: '5rem 1.5rem',
        maxWidth: 860,
        margin: '0 auto',
      }}
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <p style={{ margin: '0 0 8px', fontSize: '0.75rem', color: 'var(--neon-green)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: 3, textTransform: 'uppercase' }}>
          $ cat career.log
        </p>
        <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'Orbitron, sans-serif' }}>
          Experience &{' '}
          <span style={{ color: 'var(--neon-green)', textShadow: '0 0 20px var(--neon-green)' }}>
            Journey
          </span>
        </h2>
      </motion.div>

      {/* Two column layout on desktop */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>

        {/* Left: Experience timeline */}
        <div>
          <SectionHeading label="Work Experience" accent="var(--neon-green)" />
          {EXPERIENCE.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={index}
              isActive={index === 0}
            />
          ))}
        </div>

        {/* Right: Education + Certifications */}
        <div>
          <SectionHeading label="Education" accent="var(--neon-cyan)" />
          {EDUCATION.map((edu, i) => (
            <CompactCard
              key={edu.id}
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              tags={edu.achievements}
              accent="var(--neon-cyan)"
              index={i}
            />
          ))}

          <div style={{ marginTop: '2rem' }}>
            <SectionHeading label="Certifications" accent="var(--neon-violet)" />
            {CERTIFICATIONS.map((cert, i) => (
              <CompactCard
                key={cert.id}
                title={cert.name}
                subtitle={cert.issuer}
                period={cert.year}
                accent="var(--neon-violet)"
                index={i}
              />
            ))}
          </div>

          {/* Stats strip */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
            }}
          >
            {[
              { value: '3+', label: 'AI Projects', color: 'var(--neon-green)' },
              { value: 'N3', label: 'JLPT Level', color: 'var(--neon-cyan)' },
              { value: '🇯🇵', label: 'Based in Japan', color: 'var(--neon-violet)' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-secondary)',
                  border: `1px solid ${stat.color}33`,
                  borderRadius: 10,
                  padding: '0.875rem 0.5rem',
                  textAlign: 'center',
                }}
              >
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: stat.color, fontFamily: 'Orbitron, sans-serif', textShadow: `0 0 12px ${stat.color}` }}>
                  {stat.value}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: 1 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
