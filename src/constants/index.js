import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  carrent,
  crypton,
  musopen,
  threejs,
  upwork,
  skudrop,
  zhen,
  michael,
  nextjs,
  gatsby,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Next Developer",
    icon: backend,
  },
  {
    title: "Vite Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Gatsby",
    icon: gatsby,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "UpWork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Aug 2021 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "UpWork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Feb 2023",
    points: [
      "Developed cross-platform mobile applications using React Native.",
      "Collaborated with designers and product owners to implement UI/UX designs.",
      "Debugged and fixed issues in existing applications.",
      "Kept up-to-date with the latest technologies and trends in the React Native ecosystem.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SKUdrop",
    icon: skudrop,
    iconBg: "#383E56",
    date: "Sep 2021 - Apr 2023",
    points: [
      "Collaborate with the design team.",
      "Implement and maintain the codebase.",
      "Work with other developers.",
      "Continuously improve the user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Illia is a very talented and productive UI developer. His has high bar for attention to details and quality. Very happy with him.",
    name: "Zhen Chen",
    designation: "Owner",
    company: "CloudOrder",
    image: zhen,
  },
  {
    testimonial:
      "I enjoyed working with Illia. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. I will likely have additional jobs for him in the future.",
    name: "Eleftherios Filippidis",
    designation: "Manager",
    company: "Futureaware Tech",
    image:
      "https://www.upwork.com/profile-portraits/c1SI6B0PrG5jAxa9ZqfgdSh0yQEZIiYkIXA-L7cEBPBdwAErHCYsIh4H1zxd7ZPgVe",
  },
  {
    testimonial:
      "After Illia optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Michael Fenech",
    designation: "E-comm & Start-up entrepreneur",
    company: null,
    image: michael,
  },
];

const projects = [
  {
    name: "SKUdrop",
    description:
      "SKUdrop manages the flow of cartons between your supplier's factory and Amazon FBA. Provide cost effective storage in China, direct to Amazon shipping options, and software designed to save you time and money.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://skudrop.com/",
  },
  {
    name: "Crypton",
    description:
      "It's a platform where users can easily send and receive cryptocurrencies securely and quickly. With user-friendly interface, you can seamlessly manage your crypto transactions and make payments to anyone, anywhere in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "metamask",
        color: "pink-text-gradient",
      },
      {
        name: "web 3.0",
        color: "blue-text-gradient",
      },
    ],
    image: crypton,
    source_code_link: "https://github.com/IlliaDom/Crypton",
  },
  {
    name: "Musopen",
    description:
      "Platform to improve access to music education by providing access to free music, sheet music, apps, and educational materials.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: musopen,
    source_code_link: "https://musopen.org",
  },
];

export { services, technologies, experiences, testimonials, projects };
