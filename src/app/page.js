"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import Landing from "@/components/landing/Landing";
import Description from "@/components/description/Description";
import Project from "../components/projects";
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
      <Description />
      <Project />
    </main>
  );
}
