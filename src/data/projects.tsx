import { Project } from "../types/index";
import { TechPill } from "../components";
import {
  IconReact,
  IconTypeScript,
  IconTailwind,
  IconBootstrap,
  IconNpm,
  IconNodeJs,
  IconStyledComponents,
  IconScss,
} from "../components/icons/index";

export const projects: Project[] = [
  {
    id: 1,
    title: "Community Science Museum",
    image: "/images/sciencemus.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
    projectUrl: "https://joakimlees-science-museum-project.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce store",
    image: "/images/ecom.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconBootstrap size={20} />} label="Boostrap" />,
      <TechPill icon={<IconNpm size={20} />} label="NPM" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
    projectUrl: "https://joakimlees-science-museum-project.netlify.app/",
  },
  {
    id: 3,
    title: "Booking venues site",
    image: "/images/holidaze.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
    projectUrl: "https://joakimlees-science-museum-project.netlify.app/",
  },
  {
    id: 4,
    title: "Auction house project",
    image: "/images/ah-project.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconBootstrap size={20} />} label="Boostrap" />,
      <TechPill icon={<IconNpm size={20} />} label="NPM" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
    projectUrl: "https://joakimlees-science-museum-project.netlify.app/",
  },
];
