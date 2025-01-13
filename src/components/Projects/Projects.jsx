import React from "react";
import { projects } from "./data";

export default function Projects({ setActiveMenu }) {
  return (
    <div className="relative mix-blend-difference z-10 text-white w-full">
      <div
        onMouseLeave={() => {
          setActiveMenu(null);
        }}
        className="border-b border-b-grayBorder font-medium text-blackText"
      >
        {projects.map((project, i) => {
          return (
            <a
              onMouseOver={() => {
                setActiveMenu(i);
              }}
              key={project.title}
              className="flex cursor-pointer items-center justify-between border-t border-t-grayBorder px-20 py-[70px] transition-all hover:px-10"
              href={project.href}
            >
              <p className="text-[40px] uppercase text-blackTitle">
                {project.title}
              </p>
              <p className="inter text-lg text-blackTitle">{project.descr}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
