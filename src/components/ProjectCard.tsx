import React from 'react';
import { ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { Button } from './Button';
import { GithubIcon } from './icons/BrandIcons';

export interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isComplete = project.status === 'Complete';

  return (
    <article className="project-card" aria-labelledby={`project-title-${project.id}`}>
      {/* Thumbnail Container with Consistent 16:9 Aspect Ratio */}
      <div className="project-card__media">
        <img
          src={project.thumbnail}
          alt={`Interface preview of ${project.title}`}
          className="project-card__image"
          loading="lazy"
          width="800"
          height="450"
        />
        <div className="project-card__status-overlay">
          <span
            className={`project-status-badge ${
              isComplete ? 'project-status-badge--complete' : 'project-status-badge--progress'
            }`}
          >
            {isComplete ? (
              <CheckCircle2 size={13} aria-hidden="true" />
            ) : (
              <Clock size={13} aria-hidden="true" />
            )}
            <span>{project.status}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 id={`project-title-${project.id}`} className="project-card__title">
            {project.title}
          </h3>
          <p className="project-card__tagline">{project.tagline}</p>
        </div>

        <p className="project-card__description">{project.description}</p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-card__highlights" aria-label="Key features">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="project-card__highlight-item">
                <span className="project-card__highlight-bullet" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Pills */}
        <div className="project-card__tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-card__actions">
          {project.liveUrl ? (
            <Button
              asLink
              href={project.liveUrl}
              target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
              variant="primary"
              size="sm"
              icon={<ExternalLink size={14} aria-hidden="true" />}
              iconPosition="right"
            >
              {project.liveUrl.startsWith('#') ? 'View In Page' : 'Live Demo'}
            </Button>
          ) : (
            <span className="project-card__no-demo" title="Live deployment pending backend setup">
              Deployment in progress
            </span>
          )}

          {project.repoUrl && (
            <Button
              asLink
              href={project.repoUrl}
              target="_blank"
              variant="secondary"
              size="sm"
              icon={<GithubIcon size={14} />}
              iconPosition="left"
            >
              Source Code
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
