"use client";
import { useEffect } from "react";

export function AnimationScroll() {
  function animateOnScroll(): void {
    const sections = document.querySelectorAll<HTMLElement>("[data-animation]");

    sections.forEach((section) => {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        const animationClass = section.getAttribute("data-animation");
        const delay = section.getAttribute("data-delay");

        if (animationClass) {
          if (delay) {
            setTimeout(() => {
              section.classList.add(...animationClass.split(" "));
              section.style.opacity = "1"; // Делаем секцию видимой
            }, +delay);
          } else {
            section.classList.add(...animationClass.split(" "));
            section.style.opacity = "1"; // Делаем секцию видимой
          }
        }
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", animateOnScroll);
    window.addEventListener("load", animateOnScroll);
  }, []);
  return null;
}