import { IconifyIcon } from "@iconify/react";

interface Technology {
  name: string;
  icon: IconifyIcon | string;
}

interface Work {
  id: number;
  title: string;
  tag: string[];
  imageUrl: string;
  description: string;
  technologies: Technology[];
  images?: string[]; // Optional property for additional images
}

const works: Work[] = [
  {
    id: 1,
    title: "ChessGame",
    tag: ["Web Development"],
    imageUrl: "https://placehold.co/300",
    description: "A chess game built with React and Node.js.",
    technologies: [
      { name: "VueJS", icon: "mdi-light:home" },
      { name: "Node.js", icon: "simple-icons:tailwindcss" },
    ],
  },
  {
    id: 2,
    title: "FloraManage",
    tag: ["Web Development"],
    imageUrl: "https://placehold.co/300",
    description: "A web application for managing flora data.",
    technologies: [
      { name: "CakePHP", icon: "simple-icons:tailwindcss" },
      { name: "Tailwind", icon: "simple-icons:tailwindcss" },
    ],
  },
  {
    id: 3,
    title: "Climbing VR/AR",
    tag: ["Software Development"],
    imageUrl: "https://placehold.co/300",
    description: "A VR/AR climbing simulator.",
    technologies: [
      { name: "Unity", icon: "unity-icon.png" },
      { name: "C#", icon: "csharp-icon.png" },
    ],
  },
  {
    id: 4,
    title: "TheCrew",
    tag: ["Web Development"],
    imageUrl: "https://placehold.co/300",
    description: "A web application for team management.",
    technologies: [
      { name: "Angular", icon: "angular-icon.png" },
      { name: "Firebase", icon: "firebase-icon.png" },
    ],
  },
  {
    id: 5,
    title: "Rust HTTP Server",
    tag: ["Software Development"],
    imageUrl: "https://placehold.co/300",
    description: "A high-performance HTTP server built with Rust.",
    technologies: [
      { name: "Rust", icon: "rust-icon.png" },
      { name: "Rocket", icon: "rocket-icon.png" },
    ],
  },
];

export function getLink(id: number): string {
  const work = works.find((work) => work.id === id);
  return work ? `/work/${work?.id}` : "/404"; // Redirect to 404 if work not found
}

const featured: Work[] = works.slice(0, 3);

export { works, featured };
