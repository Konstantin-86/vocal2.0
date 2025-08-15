"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/TextScroll.module.css";

interface ScrollMarqueeProps {
  text: string; // Текст для бегущей строки
  repeat?: number; // Сколько раз повторять текст (по умолчанию 10)
  speed?: number; // Множитель скорости (по умолчанию 1)
  className?: string; // Дополнительные классы для контейнера
}

const TextScroll: React.FC<ScrollMarqueeProps> = ({
  text,
  repeat = 10,
  speed = 1,
  className = "",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ threshold: 0 });

  // Формируем полный текст с повторениями
  const fullText = Array(repeat).fill(text).join(" ");

  useEffect(() => {
    if (!inView) return;

    const handleScroll = () => {
      if (!contentRef.current || !containerRef.current) return;

      const contentWidth = contentRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const availableScrollWidth = contentWidth - containerWidth;

      if (availableScrollWidth <= 0) return;

      const scrollY = window.scrollY;
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / totalScrollHeight, 1);

      setScrollProgress(progress * availableScrollWidth * speed);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [inView, speed]);

  return (
    <div ref={ref} className={`${styles.container} ${className}`}>
      <div ref={containerRef} className={styles.innerContainer}>
        <div
          ref={contentRef}
          className={styles.content}
          style={{ transform: `translateX(-${scrollProgress}px)` }}
        >
          {fullText}
        </div>
      </div>
    </div>
  );
};

export default TextScroll;
