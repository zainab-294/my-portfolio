import React from 'react';
import { skillCategoriesData } from '../data/skills';
import { SkillGroup } from '../components/SkillGroup';
import { SectionHeading } from '../components/SectionHeading';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Capabilities"
          title="Skills & Technologies"
          description="Clear, honest categorization of my active capabilities, everyday engineering workflows, and technologies currently in active study. Focused on practical utility rather than arbitrary scores."
          align="center"
        />

        <div className="skills-grid">
          {skillCategoriesData.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
