"use client";
import styles from "./style.module.scss";
import Nav from "./nav";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
const Index = () => {
  const header = useRef(null);
  const button = useRef(null);
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div ref={header} className={styles.header}>
        <div>
          <div className={styles.logo}>
            <p className={styles.copyright}>©</p>
            <div className={styles.name}>
              <p className={styles.codeBy}>Code by</p>
              <p className={styles.Huslen}>Huslen</p>
              <p className={styles.Laufey}>Laufey</p>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.el}>
            <a>Work</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>About</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>Contact</a>
            <div className={styles.indicator}></div>
          </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Index;
