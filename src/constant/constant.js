import blockchain from "../assets/blockchain.png";
import sorting from "../assets/sorting.png";
import weather from "../assets/weather.png";
import tailwindCss from "../assets/tailwindcss-icon.svg";
import ether from "../assets/ether.svg";
import hardhat from "../assets/hardhat.svg";

const IconsList = [
  {
    id: 1,
    name: "fa-brands fa-twitter",
    link: "https://twitter.com/CelestiaL2301",
    theme: "#00acee",
  },
  {
    id: 2,
    name: "fa-brands fa-github",
    link: "https://github.com/Ayush-2301",
    theme: "#6e5494",
  },
  {
    id: 3,
    name: "fa-brands fa-instagram",
    link: "https://www.instagram.com/chauhan_ayush64/",
    theme: "#e95950",
  },
  {
    id: 4,
    name: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/ayush-chauhan",
    theme: "#4078c0",
  },
];
const NavIcons = [
  {
    id: 1,
    name: "fa-solid fa-house",
    theme: "#279AF1",
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    name: "fa-solid fa-gears",
    theme: "#ef233c",
    link: "/skill",
    title: "Skills",
  },
  {
    id: 3,
    name: "fa-solid fa-folder-open",
    theme: "#06d6a0",
    link: "/projects",
    title: "Projects",
  },
  {
    id: 4,
    name: "fa-solid fa-paper-plane",
    theme: "#ff9f1c",
    link: "/contact",
    title: "Contact",
  },
];
const DarkModeicon = {
  toggleOn: "fa-solid fa-sun-bright",
  toggleOff: "fa-solid fa-moon",
};
const SkillIcon = [
  {
    id: 1,
    name: "fa-brands fa-html5",
    link: "#",
    theme: "#E44D26",
    title: "HTML",
  },
  {
    id: 2,
    name: "fa-brands fa-css3-alt",
    link: "#",
    theme: "	#264de4",
    title: "CSS",
  },
  {
    id: 3,
    name: "fa-brands fa-square-js",
    link: "#",
    theme: "#f0db4f",
    title: "JavaScript",
  },
  {
    id: 4,
    name: "fa-brands fa-react",
    link: "#",
    theme: "#1c84bc",
    title: "React",
  },
  {
    id: 5,
    name: "fa-brands fa-node-js",
    link: "#",
    theme: "#3c873a",
    title: "NodeJS",
  },
  {
    id: 6,
    name: "fa-brands fa-git-alt",
    link: "#",
    theme: "#f34f29",
    title: "Git",
  },
  {
    id: 7,
    name: "fa-brands fa-ethereum",
    link: "#",
    theme: "#3c3c3d",
    title: "Solidity",
  },
];
const ProjectsDisc = [
  {
    id: 1,
    img: sorting,
    discription: "A visualization of some sorting algorithms",
    link: "https://github.com/Ayush-2301/Sorting-Visualizer",
  },
  {
    id: 2,
    img: blockchain,
    discription: "Allow user to send transaction through blockchain",
    link: "https://github.com/Ayush-2301/web-3.0",
  },
  {
    id: 3,
    img: weather,
    discription: "A Weather App with stunning design",
    link: "https://github.com/Ayush-2301/Weather-App",
  },
];
const skillSvg = {
  imgTailwind: tailwindCss,
  imgEther: ether,
  imgHardhat: hardhat,
};
export { IconsList, NavIcons, DarkModeicon, SkillIcon, ProjectsDisc, skillSvg };
