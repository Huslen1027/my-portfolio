"use client";

import { useEffect } from "react";
import Landing from "../components/landing";
import Project from "../components/projects";
import styles from "./page.module.scss";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Project />
    </main>
  );
}
