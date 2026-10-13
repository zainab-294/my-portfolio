import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently active in the viewport.
 * Uses IntersectionObserver to avoid expensive on-scroll recalculations.
 */
export function useActiveSection(sectionIds: string[], defaultSection: string = 'hero'): string {
  // Derive initial active section from URL hash if valid, otherwise fallback to defaultSection
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        return hash;
      }
    }
    return defaultSection;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Listen to hash changes for browser back/forward buttons
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash && sectionIds.includes(currentHash)) {
        setActiveSection(currentHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry that is intersecting with the highest ratio in viewport
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topEntry = visibleEntries[0];
        if (topEntry.target.id) {
          setActiveSection(topEntry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-15% 0px -40% 0px',
      threshold: [0, 0.2, 0.5, 0.8],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
