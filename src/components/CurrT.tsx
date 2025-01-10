"use client";
import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const utcNow = new Date();
    const localTime = new Date(utcNow.getTime() + 3 * 60 * 60 * 1000); // UTC +3
    const formattedTime = localTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(`${formattedTime} UTC +3`);
  };

  useEffect(() => {
    updateTime(); // Устанавливаем время при первом рендере
    const interval = setInterval(updateTime, 5000); // Обновляем время каждые 5 секунд

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, []);

  return <div>{time}</div>;
};

export default CurrentTime;
