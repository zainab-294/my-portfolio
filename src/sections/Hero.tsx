import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Send, MapPin, Terminal } from 'lucide-react';
import { personalData } from '../data/personal';
import { Button } from '../components/Button';
import { SocialLinks } from '../components/SocialLinks';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotionPreference();

  // Animation variants with strict typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -30;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      {/* Restrained Ambient Gradient Background */}
      <div className="hero-background-ambient" aria-hidden="true">
        <div className="hero-ambient-circle-1" />
        <div className="hero-ambient-circle-2" />
      </div>

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="hero-eyebrow">
              <span className="hero-eyebrow__pulse animate-pulse-subtle" aria-hidden="true" />
              <span>{personalData.eyebrow}</span>
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            {personalData.name.includes(' ') ? (
              <>
                <span>{personalData.name.split(' ')[0]} </span>
                <span className="hero-title__highlight">{personalData.name.split(' ').slice(1).join(' ')}</span>
              </>
            ) : (
              <span className="hero-title__highlight">{personalData.name}</span>
            )}
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-role">
            <Terminal size={20} aria-hidden="true" />
            <span>{personalData.role}</span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-bio">
            {personalData.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <Button
              asLink
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              variant="primary"
              size="lg"
              icon={<ArrowDown size={18} aria-hidden="true" />}
              iconPosition="right"
            >
              View Projects
            </Button>

            <Button
              asLink
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              variant="secondary"
              size="lg"
              icon={<Send size={16} aria-hidden="true" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-meta">
            <div className="hero-meta__location">
              <MapPin size={15} aria-hidden="true" />
              <span>{personalData.location}</span>
            </div>

            <SocialLinks
              githubUrl={personalData.githubUrl}
              linkedinUrl={personalData.linkedinUrl}
              email={personalData.email}
            />
          </motion.div>
        </motion.div>

        {/* Right Column: Restrained Visual Composition */}
        <motion.div
          className="hero-visual-card"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-card-frame">
            <div className="hero-card-accent-bar" />
            
            <div className="hero-card-header">
              <div className="hero-avatar" aria-hidden="true">
                {personalData.name.charAt(0)}
              </div>
              <div>
                <h2 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>{personalData.name}</h2>
                <div className="hero-card-status-badge">
                  <span className="hero-card-status-dot" aria-hidden="true" />
                  <span>Open to Junior Roles</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Passionate about accessible UI patterns, clean CSS architectures, and performant web interfaces.
            </p>

            <div className="hero-card-skills-preview">
              <div className="hero-card-skill-row">
                <span>Core Stack</span>
                <span className="hero-card-skill-tag">HTML5 • CSS3 • JS</span>
              </div>
              <div className="hero-card-skill-row">
                <span>Currently Leveling Up</span>
                <span className="hero-card-skill-tag">React • TypeScript • Node</span>
              </div>
              <div className="hero-card-skill-row">
                <span>Engineering Focus</span>
                <span className="hero-card-skill-tag">Design Systems & A11y</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
