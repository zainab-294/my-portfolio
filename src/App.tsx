import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { NavigationDock } from './components/NavigationDock';
import { ScrollProgress } from './components/ScrollProgress';
import { Footer } from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

export function App() {
  const activeSection = useActiveSection(['hero', 'projects', 'skills', 'education', 'contact'], 'hero');

  return (
    <div className="site-wrapper">
      {/* Keyboard Accessibility: Skip to Content */}
      <a href="#hero" className="skip-link">
        Skip to main content
      </a>

      {/* Subtle Scroll Progress Bar */}
      <ScrollProgress />

      {/* Main Single Page Sections */}
      <main id="main-content" className="main-content" role="main">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Accessible Footer */}
      <Footer />

      {/* Signature Four-Icon Navigation Dock */}
      <NavigationDock activeSection={activeSection} />
    </div>
  );
}

export default App;
