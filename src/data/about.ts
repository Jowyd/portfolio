export default {
  title: "About Me",
  description:
    "I'm a passionate developer with a strong interest in cybersecurity. Currently pursuing my Bachelor's degree in Computer Science, I'm focused on both software development and security aspects. I enjoy working with a variety of technologies and languages, including Angular, Node.js, Typescript, Docker, PostgreSQL, C++, Python, Java, and PHP. I'm always eager to learn and expand my skill set, particularly in the areas of secure software development and ethical hacking.",

  education: [
    {
      degree: "Bachelor's Degree in Computer Science (BUT Informatique)",
      school: "IUT Lyon 1 - Bourg-en-Bresse",
      year: "2022 - Present",
      current: true,
      description:
        "Currently in my third year, specializing in software development. Working on various projects, including web applications, software development, networking, database, english and other soft skills.",
    },
    {
      degree: "Baccalauréat",
      school: "High School",
      year: "2022",
      current: false,
      description:
        "General stream with specialization in Mathematics and Computer Science.",
    },
  ],

  experience: [
    {
      type: "Apprenticeship",
      title: "FullStack Developer, DevOps",
      company: "ContentSide",
      period: "September 2024 - August 2025",
      description: "DevOps Developer position at ContentSide, a company specialized in AI-powered text analysis SaaS solutions and web development. My responsibilities cover two main areas. On one hand, infrastructure/CI/CD: managing tools (ElasticSearch, Temporal IO, Kubernetes), automated deployments, monitoring, and application updates. On the other hand, development: designing and maintaining web applications, implementing evolutions, bug fixes, and creating tests.",
      technologies: [
        { name: "SpringBoot", icon: "simple-icons:spring" },
        { name: "Kotlin", icon: "simple-icons:kotlin" },
        { name: "React", icon: "simple-icons:react" },
        { name: "Docker", icon: "simple-icons:docker" },
        { name: "Kubernetes", icon: "simple-icons:kubernetes" },
        { name: "Grafana", icon: "simple-icons:grafana" },
        { name: "Bitbucket", icon: "simple-icons:bitbucket" },
        { name: "Python", icon: "simple-icons:python" },
        { name: "Scaleway", icon: "simple-icons:scaleway" },
        { name: "PostgreSQL", icon: "simple-icons:postgresql" },
        { name: "Elasticsearch", icon: "simple-icons:elasticsearch" },
        { name: "Temporal", icon: "simple-icons:temporal" }
      ],
      current: true
    },
    {
      type: "Internship",
      title: "FullStack Developer",
      company: "Axopen",
      period: "April 2024 - June 2024",
      description: "FullStack Developer position at Axopen, an IT services company specialized in software solutions. My main mission involved the evolutionary maintenance of a web application using Java SpringBoot on the server side and Angular on the client side. I was responsible for development tasks including implementing new features, bug fixes, as well as design, client needs analysis, and technical solution proposals. Additionally, I handled client communication.",
      technologies: [
        { name: "Java", icon: "ri:java-fill" },
        { name: "SpringBoot", icon: "simple-icons:spring" },
        { name: "Angular", icon: "simple-icons:angular" },
        { name: "PostgreSQL", icon: "simple-icons:postgresql" }
      ],
      current: false
    },
    {
      type: "Freelance",
      title: "FullStack Developer",
      company: "SKO Conseil",
      period: "September 2023 - May 2024",
      description: "FullStack Developer, I co-developed a B2B/B2C shoe resale platform (Angular/Express.js). I implemented real-time mechanisms via SocketIO and integrated secure interfaces to interact with an external payment and virtual wallet management service, ensuring GDPR compliance and good data security practices. This experience strengthened my technical expertise and collaboration skills.",
      technologies: [
        { name: "Angular", icon: "simple-icons:angular" },
        { name: "Node.js", icon: "simple-icons:nodedotjs" },
        { name: "Socket.io", icon: "simple-icons:socketdotio" },
        { name: "MariaDB", icon: "simple-icons:mariadb" },
        { name: "TypeScript", icon: "simple-icons:typescript" }
      ],
      current: false
    },
    {
      type: "Freelance",
      title: "Back-end Developer",
      company: "SKO Conseil",
      period: "February 2023 - July 2023",
      description: "Back-end Developer, I migrated the database and co-developed a C2C shoe resale mobile application (Express.js / SocketIO) in collaboration with a front-end developer and another back-end developer. I designed the real-time messaging system, optimizing performance and data security. This agile team experience strengthened my ability to articulate technical solutions and user needs while ensuring infrastructure scalability.",
      technologies: [
        { name: "Node.js", icon: "simple-icons:nodedotjs" },
        { name: "Socket.io", icon: "simple-icons:socketdotio" },
        { name: "TypeScript", icon: "simple-icons:typescript" },
        { name: "MariaDB", icon: "simple-icons:mariadb" }
      ],
      current: false
    }
  ],

  technologies: [
    { name: "Angular", icon: "simple-icons:angular" },
    { name: "Node.js", icon: "simple-icons:nodedotjs" },
    { name: "Typescript", icon: "simple-icons:typescript" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "C++", icon: "simple-icons:cplusplus" },
    { name: "Python", icon: "simple-icons:python" },
    { name: "Kotlin", icon: "simple-icons:kotlin" },
    { name: "PHP", icon: "simple-icons:php" },
    { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  ],
  software: [
    { name: "VSCode", icon: "simple-icons:visualstudio" },
    { name: "Figma", icon: "simple-icons:figma" },
    { name: "Git", icon: "simple-icons:git" },
    { name: "Discord", icon: "simple-icons:discord" },
    { name: "Obsidian", icon: "simple-icons:obsidian" },
    { name: "Postman", icon: "simple-icons:postman" },
    { name: "Burp Suite", icon: "simple-icons:burpsuite" },
    { name: "Bash", icon: "simple-icons:gnubash" },
  ],
  learning: [
    {
      name: "Rust",
      icon: "simple-icons:rust",
      description: "Learning Rust for system programming and performance.",
    },
    {
      name: "Solana",
      icon: "simple-icons:solana",
      description: "Exploring Solana for blockchain development.",
    },
    {
      name: "Kubernetes",
      icon: "simple-icons:kubernetes",
      description: "Learning Kubernetes for container orchestration.",
    },
    {
      name: "Web Security",
      icon: "simple-icons:hackerone",
      description:
        "Learning about web security, bug bounty and ethical hacking.",
    },
  ],
};
