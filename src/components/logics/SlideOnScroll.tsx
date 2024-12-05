"use client";

import { useEffect } from "react";

export function SlideOnScroll() {
  const ge = (id: string) => {
    return document.getElementById(id) as HTMLElement;
  };

  useEffect(() => {
    const section = ge("scroll-slider");
    const row1 = ge("scroll-slider-item-1");
    const row2 = ge("scroll-slider-item-2");

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      // Проверяем, находится ли секция в области видимости
      if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
        const scrollFraction =
          (window.innerHeight - sectionTop) / window.innerHeight;

        // Двигаем row1 вправо и row2 влево
        const row1TranslateX = window.innerWidth / 2 + scrollFraction * 250; // 100px вправо

        const row2TranslateX = -(window.innerWidth / 2) - scrollFraction * 250; // 100px влево

        const a = row1TranslateX / 100;
        const b = row2TranslateX / 100;

        console.log(a);
        console.log(b);

        row1.style.transform = `translateX(${a}%)`;
        row2.style.transform = `translateX(${b}%)`;
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Этот компонент ничего не рендерит
  return null;
}
