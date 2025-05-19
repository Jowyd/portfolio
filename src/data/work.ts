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
  github?: string; // Optional property for GitHub link
}

const works: Work[] = [
  {
    id: 1,
    title: "ChaiseDotCom",
    tag: ["FullStack Web Development"],
    imageUrl: "./img/chaise2.png",
    description:
      "This game was part of lesson on Typescript back-end and front-end development. A chess game built with VueJs for the frontend connected to a Node.js API both wrote in Typescript. The game is played locally and the moves are saved in a database. The game is played with a friend. You can see the moves of the game in a list. The game is played with a friend. You can see the moves of the game in a list. Also an history of the games played. This project taught me a lot about Typescript and how to use it in a real project. I also learned how to use VueJs and PrimeVue for the front-end. I also learned how to use Node.js and Express for the back-end. I also learned how to use Mariadb for the database.",
    technologies: [
      { name: "VueJS", icon: "simple-icons:vuedotjs" },
      { name: "PrimeVue", icon: "simple-icons:primevue" },
      { name: "Tailwind", icon: "simple-icons:tailwindcss" },
      { name: "Typescript", icon: "simple-icons:typescript" },
      { name: "Node.js", icon: "simple-icons:tailwindcss" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Mariadb", icon: "simple-icons:mariadb" },
      { name: "Sequelize", icon: "simple-icons:sequelize" },
    ],
    images: ["./img/chaise1.png", "./img/chaise3.png", "./img/chaise4.png"],
    github: "https://github.com/Jowyd/chaisedotcom",
  },
  // {
  //   id: 2,
  //   title: "FloraManage",
  //   tag: ["Web Development"],
  //   imageUrl: "https://placehold.co/300",
  //   description: "A web application for managing flora data.",
  //   technologies: [
  //     { name: "CakePHP", icon: "simple-icons:tailwindcss" },
  //     { name: "Tailwind", icon: "simple-icons:tailwindcss" },
  //   ],
  // },
  {
    id: 3,
    title: "Climbing VR/AR",
    tag: ["Software Development", "Game Development", "VR/AR"],
    imageUrl: "./img/escalade2.png",
    description:
      "This project was part of a school project in group. We had to create a VR/AR application for climbing. This project use Python and OpenCV for the image processing with an interface created with TKinter and a database in SQLite. The goal of the project was to create a VR/AR application for climbing. The application has 2 games mode Twister that challenge your balance and Reflex that tests your reflex. The project's goal was to create a way to make accessible climbing for everyone. The project was a success and we were able to create a working prototype. The project was a great experience and I learned a lot about VR/AR development and how to use Python for image processing.",
    technologies: [
      { name: "Python", icon: "simple-icons:python" },
      { name: "OpenCV", icon: "simple-icons:opencv" },
      { name: "SQLAlchemy", icon: "simple-icons:sqlalchemy" },
      { name: "TKinter", icon: "simple-icons:tkinter" },
      { name: "SQLite", icon: "simple-icons:sqlite" },
    ],
    images: [
      "./img/escalade1.png",
      "./img/escalade3.png",
      "./img/escalade4.png",
    ],
    github: "https://github.com/Jowyd/SAE-Escalade-AR-VR",
  },
  {
    id: 4,
    title: "TheCrew",
    tag: [
      "Web Development",
      "FullStack Development",
      "Game Development",
      "RealTime application",
    ],
    imageUrl: "./img/sae4.png",
    description:
      "This project was part of a school project in group. We had to create a game in real time with a back-end and a front-end. The game is a card game called The Crew. The game is played with 4 players. The goal of the game is to complete missions. The game is played with cards. The game is played with a friend. You can see the moves of the game in a list. The game is played with a friend. You can see the moves of the game in a list. Also an history of the games played. This project taught me a lot about Typescript and how to use it in a real project. I also learned how to use Angular and Angular Material for the front-end. I also learned how to use Node.js and Express for the back-end. I also learned how to use Mariadb for the database.",
    technologies: [
      { name: "Angular", icon: "simple-icons:angular" },
      { name: "Mariadb", icon: "simple-icons:mariadb" },
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Typescript", icon: "simple-icons:typescript" },
      { name: "Node.js", icon: "simple-icons:nodedotjs" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Socket.io", icon: "simple-icons:socketdotio" },
      { name: "Jest", icon: "simple-icons:jest" },
    ],
    images: ["./img/sae3.png", "./img/sae1.png", "./img/sae2.png"],
    github: "https://github.com/Jowyd/TheCrew",
  },
  // {
  //   id: 5,
  //   title: "Rust HTTP Server",
  //   tag: ["Software Development"],
  //   imageUrl: "https://placehold.co/300",
  //   description: "A high-performance HTTP server built with Rust.",
  //   technologies: [
  //     { name: "Rust", icon: "rust-icon.png" },
  //     { name: "Rocket", icon: "rocket-icon.png" },
  //   ],
  //   images: [
  //     "https://placehold.co/600x400",
  //     "https://placehold.co/600x400",
  //     "https://placehold.co/600x400",
  //   ],
  // },
];

export function getLink(id: number): string {
  const work = works.find((work) => work.id === id);
  return work ? `/work/${work?.id}` : "/404"; // Redirect to 404 if work not found
}

const featured: Work[] = works.slice(0, 3);

export { works, featured };
