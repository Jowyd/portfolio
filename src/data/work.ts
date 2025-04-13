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
    imageUrl:
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360564448623988977/image.png?ex=67fb93e2&is=67fa4262&hm=441548c5faf32cc8184f5b8a8100f5398dfd6cbf08c84b34fd6c021911bf0bce&",
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
    images: [
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360564426637578282/image.png?ex=67fb93dd&is=67fa425d&hm=ccb124f15b8e82319a8aa7d3b9162164fd224c7ca950113b09358d1eca693b2f&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360564468907643103/image.png?ex=67fb93e7&is=67fa4267&hm=cde662572d2b1f4a390d79ecf75fda82bb2e429f680d24b5139a777744254cc9&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360564495210119338/image.png?ex=67fb93ed&is=67fa426d&hm=2a5551d86da01c9f49aa9a4b99aa281136eae056fd2e4f08a99deea0459ae83a&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360564448623988977/image.png?ex=67fb93e2&is=67fa4262&hm=441548c5faf32cc8184f5b8a8100f5398dfd6cbf08c84b34fd6c021911bf0bce&",
    ],
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
    imageUrl:
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360567578182947028/image.png?ex=67fb96cc&is=67fa454c&hm=ff10b8a8c8d402a484c7d3a53904ac7733f5e70a28b634175e0a9f76efe64d9d&",
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
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360567473577005158/image.png?ex=67fb96b3&is=67fa4533&hm=388bcb3206d98138ba0d36a0eef484bcc598639e560ff0defaabf23c1ee73e17&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360567537389142076/image.png?ex=67fb96c3&is=67fa4543&hm=6ae528ead64047b2f4294820d2313b01701c14103e959ec8955fec54f64b6e07&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360567578182947028/image.png?ex=67fb96cc&is=67fa454c&hm=ff10b8a8c8d402a484c7d3a53904ac7733f5e70a28b634175e0a9f76efe64d9d&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360567609493295246/image.png?ex=67fb96d4&is=67fa4554&hm=4a81de2980613af97629eaa19853de7d6ac2a869ddfee24b4cdd8ea2aae937c4&",
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
    imageUrl:
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360600744348221540/6917BFE3-454E-474A-A1DD-74194FFB48C9.png?ex=67fd0730&is=67fbb5b0&hm=6018fc2484f6df6c87a9bc2b17a46bacc09208e5d9f2d2437abc319b895c5a88&",
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
    images: [
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360601120052875294/D05B4136-B9CF-445D-9AFC-845A53839DA6.png?ex=67fd0789&is=67fbb609&hm=d91ef318a57a0d679a879a09ad57bcf6055666291cdf81aa7a9764b12cdc6f08&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360601066475098262/704B1DC3-A0D8-4355-BE18-D7605751FF93.png?ex=67fd077c&is=67fbb5fc&hm=019fef6203f64afc24820626d5e03d2ab137aa79102eafe4ab4efabedf3f153d&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360600971763388598/1B2D34CB-8110-4126-967F-05A478A43279.png?ex=67fd0766&is=67fbb5e6&hm=e2407b7a4ab57e8fee192b492dc75ac0f1a55bfb8e5fb339ba459f8c89c76e97&",
      "https://cdn.discordapp.com/attachments/1122199917373427803/1360600744348221540/6917BFE3-454E-474A-A1DD-74194FFB48C9.png?ex=67fd0730&is=67fbb5b0&hm=6018fc2484f6df6c87a9bc2b17a46bacc09208e5d9f2d2437abc319b895c5a88&",
    ],
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
