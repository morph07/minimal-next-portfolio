import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "I specialize in creating, deploying, and maintaining responsive, user-friendly applications while also handling server setup and DevOps tasks to ensure smooth and reliable operations. From interactive front-end experiences to powerful back-end systems, I love building solutions that make an impact.",
    metadata: {
      title: "Home",
      description: "Ambet Guevarra's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Ambet Guevarra's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Ambet Guevarra's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Ambet Guevarra.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Ambet Guevarra's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ambet Guevarra's resume.",
    metadata: {
      title: "Resume",
      description: "Ambet Guevarra's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Ambet Guevarra's professional journey and experience timeline.",
    },
  },
};
