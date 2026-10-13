import React from 'react';
import { personalData } from '../data/personal';
import { ContactForm } from '../components/ContactForm';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks } from '../components/SocialLinks';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get in Touch"
          description="Whether you have an inquiry regarding junior frontend opportunities, collaboration ideas, or feedback on my projects, my inbox is open."
          align="center"
        />

        <div className="contact-layout">
          {/* Left: Contact Info & Availability */}
          <div className="contact-info-card">
            <h3 className="contact-info-card__title">Let's Discuss Opportunities</h3>
            <p className="contact-info-card__description">
              I am actively seeking junior frontend development roles, internships, and open-source contributions. Feel free to send a message or connect through social links.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-method-label">Direct Email</span>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="contact-method-value hover:underline"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-method-label">Location Status</span>
                  <span className="contact-method-value">{personalData.location}</span>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <CheckCircle2 size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-method-label">Current Availability</span>
                  <span className="contact-method-value">{personalData.availability}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="contact-method-label mb-2 block">Connect on Social</span>
              <SocialLinks
                githubUrl={personalData.githubUrl}
                linkedinUrl={personalData.linkedinUrl}
                email={personalData.email}
              />
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
