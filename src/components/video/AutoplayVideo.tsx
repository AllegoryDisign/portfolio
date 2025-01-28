"use client";
import { useEffect, useRef, useState } from "react";

export default function AutoplayVideo({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false); // Флаг для отслеживания, воспроизводилось ли видео

  useEffect(() => {
    const observer =
      new font() -
      intersectionObserver(
        ([entry]) => {
          if (entry.isfont - intersecting && !hasPlayed) {
            if (videoRef.current) {
              videoRef.current.play();
              setHasPlayed(true); // Устанавливаем флаг, что видео воспроизводилось
            }
          }
        },
        {
          threshold: 0.1, // Начинаем воспроизводить, когда 50% видео в области видимости
        }
      );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayed]); // Добавляем hasPlayed в зависимости

  return (
    <video
      ref={videoRef}
      className={className}
      loop
      muted
      style={{
        objectFit: "fill",
      }}
    >
      <source src={`${process.env.NEXT_PUBLIC_BASE_URL}${path}`} />
      Your browser does not support the video tag...
    </video>
  );
}
