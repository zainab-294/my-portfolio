export interface SkillItem {
  name: string;
  category: 'frontend' | 'workflow' | 'learning';
  description: string;
  practicalFocus: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Current Frontend Skills",
    eyebrow: "Core Foundation",
    description: "Solid foundational knowledge in modern standards-compliant web technologies and structural semantics.",
    skills: [
      {
        name: "HTML5",
        category: "frontend",
        description: "Semantic document structure, landmark elements, accessible forms, and SEO metadata.",
        practicalFocus: "Clean DOM architecture & accessibility standards"
      },
      {
        name: "CSS3",
        category: "frontend",
        description: "Modern layout paradigms (Flexbox, CSS Grid), custom properties, fluid typography, and transitions.",
        practicalFocus: "Mobile-first layouts & design systems"
      },
      {
        name: "JavaScript (ES6+)",
        category: "frontend",
        description: "Core DOM manipulation, event handling, asynchronous fetching, array methods, and scoping.",
        practicalFocus: "Interactive user interfaces & clean client logic"
      }
    ]
  },
  {
    id: "workflow",
    title: "Development Workflow",
    eyebrow: "Engineering Practices",
    description: "Essential tooling and development habits used to build, inspect, and maintain modern web applications.",
    skills: [
      {
        name: "Git",
        category: "workflow",
        description: "Version control branching, atomic commits, merging, conflict resolution, and history inspection.",
        practicalFocus: "Structured version history & change tracking"
      },
      {
        name: "GitHub",
        category: "workflow",
        description: "Remote repository hosting, pull requests, issue tracking, and repository documentation.",
        practicalFocus: "Collaborative workflow & open source sharing"
      },
      {
        name: "Responsive Design",
        category: "workflow",
        description: "Mobile-first viewpoints, flexible media queries, fluid sizing (clamp, min, max), and touch targets.",
        practicalFocus: "Cross-device compatibility from phones to 4K"
      },
      {
        name: "Browser DevTools",
        category: "workflow",
        description: "Elements inspection, style debugging, console tracing, network payload inspection, and lighthouse checks.",
        practicalFocus: "Performance profiling & CSS debugging"
      }
    ]
  },
  {
    id: "learning",
    title: "Currently Learning",
    eyebrow: "Active Growth",
    description: "Actively studying and incorporating these technologies to build fullstack web experiences.",
    skills: [
      {
        name: "React",
        category: "learning",
        description: "Component composition, declarative UI state, custom hooks, and component lifecycles.",
        practicalFocus: "Building modular, state-driven interfaces"
      },
      {
        name: "TypeScript",
        category: "learning",
        description: "Static typing, interfaces, generics, type narrowing, and strict compile checks.",
        practicalFocus: "Type safety & enhanced developer ergonomics"
      },
      {
        name: "Node.js",
        category: "learning",
        description: "Runtime environment, event loop fundamentals, file system interactions, and npm ecosystem.",
        practicalFocus: "Backend runtime & CLI automation"
      },
      {
        name: "Express",
        category: "learning",
        description: "RESTful routing, middleware configuration, request/response cycle, and JSON API handling.",
        practicalFocus: "Building backend REST services & endpoints"
      }
    ]
  }
];
