import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Laravel",
    description:
      "Build robust web applications with elegant syntax using a popular PHP framework.",
    rating: 5,
    icon: Icons.laravel,
  },
  {
    name: "Laravel Nova",
    description:
      "Create beautiful admin panels for Laravel applications with a powerful administration panel.",
    rating: 5,
    icon: Icons.laravelNova,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Vue.js",
    description:
      "Build user interfaces with a progressive JavaScript framework.",
    rating: 5,
    icon: Icons.vue,
  },
  {
    name: "Flutter",
    description:
      "Build natively compiled applications for mobile, web, and desktop from a single codebase.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Git",
    description:
      "Track changes in source code during software development.",
    rating: 5,
    icon: Icons.gitBranch,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 5,
    icon: Icons.css3,
  },
    {
    name: "Linux",
    description:
      "Deploy and manage Linux servers for web applications and services.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 5,
    icon: Icons.amazonaws,
  },
  {
    name: "Firebase",
    description:
      "Build and manage mobile and web applications with Firebase's comprehensive platform.",
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
