export type ProjectStatus = 'Complete' | 'In Progress' | 'Concept';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  thumbnail: string;
  liveUrl?: string;
  repoUrl?: string;
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    tagline: "Custom-engineered single-page portfolio with four-icon navigation dock",
    description: "Designed and engineered a distinctive single-page portfolio featuring an editorial aesthetic, CSS design tokens with custom HSL/HEX palettes, an interactive four-icon navigation dock, and strict accessibility compliance (WCAG AA).",
    status: "Complete",
    technologies: ["React", "TypeScript", "Vite", "Framer Motion", "CSS Variables"],
    thumbnail: "/projects/portfolio-preview.svg",
    liveUrl: "#hero",
    repoUrl: "https://github.com/example/personal-portfolio",
    highlights: [
      "Smooth 4-icon navigation dock with active section spy",
      "Accessible React Hook Form with client-side Zod validation",
      "Tailored pink-purple design system with zero bloated frameworks"
    ]
  },
  {
    id: "ecommerce-product-search",
    title: "E-Commerce Product Search Page",
    tagline: "Instant filtering, search debouncing, and responsive product catalog",
    description: "Built an interactive product catalog interface supporting real-time text query filtering, multi-category selection, price range sliders, and instant results count without page reloads. Optimized for mobile and desktop screens.",
    status: "Complete",
    technologies: ["JavaScript", "HTML5", "CSS3 Grid", "Flexbox", "REST API"],
    thumbnail: "/projects/ecommerce-search.svg",
    liveUrl: "https://example.com/demo/ecommerce-search",
    repoUrl: "https://github.com/example/ecommerce-product-search",
    highlights: [
      "Client-side debounced search input to optimize filter speed",
      "Accessible filter tags with keyboard removal support",
      "Fluid auto-fit CSS grid layout maintaining uniform card heights"
    ]
  },
  {
    id: "signup-form-api",
    title: "Signup Form & Auth API Service",
    tagline: "Frontend validation interface with ongoing Node.js/Express backend service",
    description: "A dual-scope project experimenting with fullstack architecture. Implemented comprehensive client-side form validation (email RFC pattern, password strength indicators) and currently building the Node.js/Express mock registration API.",
    status: "In Progress",
    technologies: ["JavaScript", "Node.js (Learning)", "Express", "CSS3", "HTML5 Forms"],
    thumbnail: "/projects/signup-api.svg",
    liveUrl: undefined,
    repoUrl: "https://github.com/example/signup-form-api",
    highlights: [
      "Multi-stage field validation with clear inline error announcements",
      "Express JSON endpoint in active development with input sanitization",
      "Clearly designated as In Progress to reflect real engineering status"
    ]
  }
];
