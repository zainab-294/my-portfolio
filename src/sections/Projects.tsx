import React from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section section--subtle" aria-label="Projects">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects Showcase"
          description="Curated web projects highlighting responsive design, accessible form interactions, and evolving fullstack experiments. Each project honestly reflects its current implementation state."
          align="center"
        />

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
