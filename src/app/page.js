"use client";

import { useEffect } from "react";
import Landing from "@/components/landing/Landing";
import Description from "@/components/description/Description";
import Project from "../components/projects";
import MySkills from "../components/mySkills";
import Contact from "../components/contact";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <Landing />
      <Description />
      <Project />
      <MySkills />
      <Contact />
    </main>
  );
}
