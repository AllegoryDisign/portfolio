"use client";
import { useEffect, useState } from "react";
import Scene from "./Scene";
import Projects from "./Projects";
import Lenis from "lenis";

export default function ProjectSection() {
  const [activeMenu, setActiveMenu] = useState(null);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Projects setActiveMenu={setActiveMenu} />
      <Scene activeMenu={activeMenu} />
    </>
  );
}
