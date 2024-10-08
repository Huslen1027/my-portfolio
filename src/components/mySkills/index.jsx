"use client";
import styles from "./style.module.scss";

import HtmlIcon from "./icons/Html-icon";
import CssIcon from "./icons/Css-Icon";
import JavascriptIcon from "./icons/Javascript-icon";
import GithubIcon from "./icons/Github";
import FigmaIcon from "./icons/Figma";
import SassIcon from "./icons/Sass";
import FramerMotionIcon from "./icons/Framer-motion";
import TypesciptIcon from "./icons/Typescript.icon";
import GraphqlIcon from "./icons/Graphql-icon";
import DaisyuiIcon from "./icons/Daisyui-icon";
import MuiIcon from "./icons/MUI-icon";
import ReactIcon from "./icons/React-Next-icon";
import TailwindIcon from "./icons/Tailwind-icon";
import CypressIcon from "./icons/Cypress-icon";
import JestIcon from "./icons/Jest-icon";
import { useRef } from "react";
import Chadcn from "./icons/Chadcn-icon";
import { motion } from "framer-motion";

const skill1 = [
  {
    title: "HTML",
    href: <HtmlIcon />,
  },
  {
    title: "CSS",
    href: <CssIcon />,
  },
  {
    title: "Javascript",
    href: <JavascriptIcon />,
  },
  {
    title: "Figma",
    href: <FigmaIcon />,
  },
  {
    title: "Github",
    href: <GithubIcon />,
  },
  {
    title: "Tailwind",
    href: <TailwindIcon />,
  },
  {
    title: "Daisyui",
    href: <DaisyuiIcon />,
  },
  {
    title: "Typescript",
    href: <TypesciptIcon />,
  },
];

const skill2 = [
  {
    title: "Sass",
    href: <SassIcon />,
  },
  {
    title: "Framer-motion",
    href: <FramerMotionIcon />,
  },
  {
    title: "MUI",
    href: <MuiIcon />,
  },
  {
    title: "Cypress",
    href: <CypressIcon />,
  },
  {
    title: "Jest",
    href: <JestIcon />,
  },
  {
    title: "Graphql",
    href: <GraphqlIcon />,
  },
  {
    title: "React/Next",
    href: <ReactIcon />,
  },
  { title: "Chadcn", href: <Chadcn /> },
];

export default function Index() {
  const container = useRef(null);

  return (
    <div ref={container} className={styles.mySkills}>
      <motion.div className={styles.slider}>
        {skill1.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.svgContainer}>
              {project.href}
              <p className={styles.p}>{project.title}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div className={styles.slider}>
        {skill2.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.svgContainer}>
              {project.href}
              <p className={styles.p}>{project.title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
