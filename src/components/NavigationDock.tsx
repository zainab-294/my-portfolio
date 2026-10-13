import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Code2, GraduationCap, Mail } from 'lucide-react';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export interface NavigationDockProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
  targetId: string;
  icon: React.ReactNode;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({ activeSection }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();

  // Exactly four icons as explicitly mandated in system.md Section 5 and style.md Section 7
  const navItems: NavItem[] = [
    {
      id: 'hero',
      label: 'Home',
      targetId: 'hero',
      icon: <Home size={20} aria-hidden="true" />,
    },
    {
      id: 'skills',
      label: 'Skills',
      targetId: 'skills',
      icon: <Code2 size={20} aria-hidden="true" />,
    },
    {
      id: 'education',
      label: 'Education',
      targetId: 'education',
      icon: <GraduationCap size={20} aria-hidden="true" />,
    },
    {
      id: 'contact',
      label: 'Contact Me',
      targetId: 'contact',
      icon: <Mail size={20} aria-hidden="true" />,
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate offset to ensure headings and content remain visible
      const yOffset = -30;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      // Update browser hash without triggering abrupt jump
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <nav
      className="nav-dock-container"
      aria-label="Primary navigation dock"
    >
      <div className="nav-dock">
        {navItems.map((item) => {
          // Highlight logic: 'hero' also covers when at the very top of page
          const isActive =
            activeSection === item.id ||
            (item.id === 'hero' && activeSection === 'projects');

          const showTooltip = hoveredId === item.id || focusedId === item.id;

          return (
            <div key={item.id} className="nav-dock__item-wrapper">
              {/* Tooltip on hover & focus */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    className="nav-dock__tooltip"
                    role="tooltip"
                    id={`tooltip-${item.id}`}
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={`#${item.targetId}`}
                onClick={(e) => handleNavClick(e, item.targetId)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setFocusedId(item.id)}
                onBlur={() => setFocusedId(null)}
                className={`nav-dock__link ${isActive ? 'nav-dock__link--active' : ''}`}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={isActive ? 'page' : undefined}
                aria-describedby={`tooltip-${item.id}`}
              >
                {/* Animated active pill background */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockIndicator"
                    className="nav-dock__indicator"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="nav-dock__icon-content">{item.icon}</span>
                <span className="nav-dock__mobile-label">{item.label}</span>
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
