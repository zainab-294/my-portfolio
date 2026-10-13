import React from 'react';
import { educationData } from '../data/education';
import { SectionHeading } from '../components/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section section--subtle" aria-label="Education">
      <div className="container">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Formal academic qualification and educational background."
          align="center"
        />

        <div className="education-container">
          {/* Main Column: Timeline / Degrees */}
          <div className="education-timeline-wrapper">
            <div className="education-timeline" aria-label="Education history">
              {educationData.map((item) => (
                <div key={item.id} className="education-timeline-item">
                  <div className="education-timeline-bullet" aria-hidden="true" />
                  
                  <div className="education-card">
                    <div className="education-card__header">
                      <h3 className="education-card__qualification">{item.qualification}</h3>
                      {item.period && <span className="education-card__period">{item.period}</span>}
                    </div>

                    {item.board && (
                      <div className="education-card__institution">
                        <span>Board: </span>
                        <strong>{item.board}</strong>
                      </div>
                    )}

                    {item.institution && (
                      <div className="education-card__institution">
                        {item.institution}
                      </div>
                    )}

                    {item.description && (
                      <p className="education-card__description">{item.description}</p>
                    )}

                    {item.coursework && item.coursework.length > 0 && (
                      <div>
                        <div className="education-card__coursework-title">Key Coursework</div>
                        <div className="education-card__coursework-tags">
                          {item.coursework.map((course) => (
                            <span key={course} className="coursework-tag">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
