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
    title: "Portfolio Website",
    image: "/images/sciencemus.jpg",
    description: "A personal portfolio built with Next.js and Tailwind.",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
  },
  {
    id: 2,
    title: "Todo App",
    image: "/images/sciencemus.jpg",
    description: "A todo app with drag-and-drop support.",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconBootstrap size={20} />} label="Boostrap" />,
      <TechPill icon={<IconNpm size={20} />} label="NPM" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/images/sciencemus.jpg",
    description: "A personal portfolio built with Next.js and Tailwind.",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
  },
  {
    id: 4,
    title: "Portfolio Website",
    image: "/images/sciencemus.jpg",
    description: "A personal portfolio built with Next.js and Tailwind.",
    techPills: [
      <TechPill icon={<IconReact size={20} />} label="React" />,
      <TechPill icon={<IconBootstrap size={20} />} label="Boostrap" />,
      <TechPill icon={<IconNpm size={20} />} label="NPM" />,
      <TechPill icon={<IconTypeScript size={20} />} label="TypeScript" />,
    ],
  },
];
