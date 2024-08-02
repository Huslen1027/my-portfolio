"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Project from "./components/project";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
const projects = [
  {
    title: "Furniro",
    src: "furniro.jpg",
    colo: "#706D63",
  },
  {
    title: "Food-delivery",
    src: "foodDelivery.jpg",
    color: "#000000",
  },
  {
    title: "Blog",
    src: "blog.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Gogo",
    src: "gogo.jpg",
    color: "#8C8C8C",
  },
];

export default function Home() {
  const cursor = useRef(null);
  const cursorlabel = useRef(null);
  const modalContainer = useRef(null);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  return (
    <main className={styles.projects}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return <Project index={index} key={index} title={project.title} />;
        })}
      </div>
      <>
        <motion.div ref={modalContainer} className={styles.modalContainer}>
          <div>
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={index}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </>
    </main>
  );
}
