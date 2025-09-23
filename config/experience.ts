import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gbms",
    position: "Chief Technology Officer",
    company: "Grand Business Management Services",
    location: "Rizal, Philippines",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Leading the technology strategy and development for a startup providing business solutions to SMEs.",
      "Overseeing the design and implementation of web applications, ensuring scalability and performance.",
      "Managing a team of developers and collaborating with cross-functional teams to deliver high-quality products.",
    ],
    achievements: [
      "Spearheaded the development of a SaaS platform that increased client acquisition by 30% within the first year.",
      "Implemented agile methodologies, reducing project delivery times by 25%.",
      "Established partnerships with key technology providers, enhancing the company's service offerings.",
    ],
    skills: [
      "Leadership",
      "Project Management",
      "Cloud Computing",
    ],
    companyUrl: "https://www.ubs.com",
    logo: "/logo.png",
  },
  {
    id: "northstar-it-manager",
    position: "IT Manager",
    company: "NorthStar Solutions Inc.",
    location: "Pasig City, Philippines",
    startDate: new Date("2016-04-01"),
    endDate: new Date("2022-07-01"),
    description: [
      "Managed IT infrastructure and operations for a mid-sized enterprise.",
      "Led a team of IT professionals in maintaining system security and performance.",
      "Coordinated with vendors and service providers to ensure optimal technology solutions.",
    ],
    achievements: [
      "Reduced IT operational costs by 20% through strategic vendor negotiations and process improvements.",
      "Successfully migrated company systems to a cloud-based infrastructure, improving accessibility and collaboration.",
      "Developed and implemented a comprehensive cybersecurity strategy, reducing security incidents by 40%.",
    ],
    skills: [
      "IT Management",
      "Cybersecurity",
      "Cloud Computing",
      "Vendor Management",
    ],
    companyUrl: "https://agentprod.com",
    logo: "/experience/agentprod-logo.png",
  },
  {
    id: "northstar-software-engineer",
    position: "Software Engineer",
    company: "NorthStar Solutions Inc.",
    location: "Pasig City, Philippines",
    startDate: new Date("2008-08-01"),
    endDate: new Date("2016-04-01"),
    description: [
      "Developed and maintained web applications using various technologies.",
      "Collaborated with cross-functional teams to define and implement new features.",
      "Participated in code reviews and contributed to improving coding standards.",
    ],
    achievements: [
      "Played a key role in the development of a flagship product that generated over $1M in annual revenue.",
      "Optimized application performance, resulting in a 15% increase in user satisfaction.",
      "Mentored junior developers, fostering a culture of continuous learning and improvement.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/builtdesign-logo.png",
  },
  {
    id: "stratvisions",
    position: "SEO Specialist",
    company: "StratvisionsPH",
    location: "Pasig City, Philippines",
    startDate: new Date("2007-08-01"),
    endDate: new Date("2008-10-01"),
    description: [
      "Implemented SEO strategies to improve website rankings and drive organic traffic.",
      "Conducted keyword research and analysis to identify growth opportunities.",
      "Collaborated with content creators to optimize website content for search engines.",
    ],
    achievements: [
      "Increased organic traffic by 50% within six months through targeted SEO campaigns.",
      "Improved website loading speed by 30%, enhancing user experience and engagement.",
      "Developed a comprehensive SEO training program for content creators, resulting in higher-quality content.",
    ],
    skills: [
      "SEO",
      "Keyword Research",
      "Content Optimization",
      "Google Analytics",
    ],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/builtdesign-logo.png",
  },
];
