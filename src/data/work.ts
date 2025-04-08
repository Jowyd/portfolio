import { IconifyIcon } from "@iconify/react";

interface Technology {
  name: string;
  icon: IconifyIcon | string;
}

interface Work {
  title: string;
  tag: string[];
  imageUrl: string;
  link: string;
  description: string;
  technologies: Technology[];
  images?: string[]; // Optional property for additional images
}

const works: Work[] = [
  {
    title: "ChessGame",
    tag: ["Web Development"],
    imageUrl: "https://placehold.co/300",
    link: "/work/project2",
    description: "A chess game built with React and Node.js.",
    technologies: [
      { name: "VueJS", icon: "mdi-light:home" },
      { name: "Node.js", icon: "simple-icons:tailwindcss" },
    ],
  },
  {
    title: "FloraManage",
    tag: ["Web Development"],
    imageUrl: "https://placehold.co/300",
    link: "/work/project2",
    description: "A web application for managing flora data.",
    technologies: [
      { name: "CakePHP", icon: "simple-icons:tailwindcss" },
      { name: "Tailwind", icon: "simple-icons:tailwindcss" },
    ],
  },
  {
    title: "Climbing VR/AR",
    tag: ["Software Development"],
    imageUrl: "https://placehold.co/300",
    link: "/work/project1",
    description: "A VR/AR climbing simulator.",
    technologies: [
      { name: "Unity", icon: "unity-icon.png" },
      { name: "C#", icon: "csharp-icon.png" },
    ],
  },
  {
    title: "TheCrew",
    tag: ["Web Development"],
    imageUrl: "https://placehold.co/300",
    link: "/work/project3",
    description: "A web application for team management.",
    technologies: [
      { name: "Angular", icon: "angular-icon.png" },
      { name: "Firebase", icon: "firebase-icon.png" },
    ],
  },
  {
    title: "Rust HTTP Server",
    tag: ["Software Development"],
    imageUrl: "https://placehold.co/300",
    link: "/work/project4",
    description: "A high-performance HTTP server built with Rust.",
    technologies: [
      { name: "Rust", icon: "rust-icon.png" },
      { name: "Rocket", icon: "rocket-icon.png" },
    ],
  },
];

const featured: Work[] = works.slice(0, 3);

export { works, featured };
