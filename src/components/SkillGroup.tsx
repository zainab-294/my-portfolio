import React from 'react';
import type { SkillCategory } from '../data/skills';
import { Code2, GitBranch, Sparkles } from 'lucide-react';

export interface SkillGroupProps {
  category: SkillCategory;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={20} className="skill-group__icon-svg" aria-hidden="true" />;
      case 'workflow':
        return <GitBranch size={20} className="skill-group__icon-svg" aria-hidden="true" />;
      case 'learning':
        return <Sparkles size={20} className="skill-group__icon-svg" aria-hidden="true" />;
      default:
        return <Code2 size={20} className="skill-group__icon-svg" aria-hidden="true" />;
    }
  };

  return (
    <div className={`skill-group-card skill-group-card--${category.id}`}>
      <div className="skill-group__header">
        <div className="skill-group__icon-wrapper">
          {getCategoryIcon(category.id)}
        </div>
        <div>
          <span className="skill-group__eyebrow">{category.eyebrow}</span>
          <h3 className="skill-group__title">{category.title}</h3>
        </div>
      </div>

      <p className="skill-group__description">{category.description}</p>

      <ul className="skill-group__list" aria-label={`Skills in ${category.title}`}>
        {category.skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <div className="skill-item__main">
              <span className="skill-item__name">{skill.name}</span>
              <span className="skill-item__focus">{skill.practicalFocus}</span>
            </div>
            <p className="skill-item__detail">{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
