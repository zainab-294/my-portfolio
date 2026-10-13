import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';

export interface SocialLinksProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  githubUrl,
  linkedinUrl,
  email,
  className = '',
}) => {
  return (
    <div className={`social-links ${className}`} aria-label="Social and contact links">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-item"
          aria-label="GitHub Profile (opens in new tab)"
          title="GitHub Profile"
        >
          <GithubIcon size={18} />
        </a>
      )}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-item"
          aria-label="LinkedIn Profile (opens in new tab)"
          title="LinkedIn Profile"
        >
          <LinkedinIcon size={18} />
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="social-link-item"
          aria-label={`Send email to ${email}`}
          title="Send Email"
        >
          <Mail size={18} aria-hidden="true" />
        </a>
      )}
    </div>
  );
};
