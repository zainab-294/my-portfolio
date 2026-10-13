import React from 'react';
import { personalData } from '../data/personal';
import { ArrowUp } from 'lucide-react';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const prefersReducedMotion = useReducedMotionPreference();

  const handleBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-content">
        <div className="footer-brand">{personalData.name}</div>
        
        <p className="footer-copyright">
          © {CURRENT_YEAR} {personalData.name}. Designed & engineered with React, TypeScript & CSS Custom Properties.
        </p>

        <button
          type="button"
          onClick={handleBackToTop}
          className="btn btn--ghost btn--sm"
          aria-label="Back to top of page"
        >
          <ArrowUp size={15} aria-hidden="true" />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
};
