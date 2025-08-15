"use client";
import { useEffect, useRef } from "react";
import styles from "@/styles/FloatingNotes.module.css";

const MUSICAL_NOTES = [
  { char: "♪", name: "eighth-note" },
  { char: "♫", name: "beamed-notes" },
  { char: "♩", name: "quarter-note" },
  { char: "♬", name: "double-beamed-notes" },
];

export default function FloatingNotes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Левая колонка (сверху вниз)
    const spawnLeftColumnNote = () => {
      const noteData =
        MUSICAL_NOTES[Math.floor(Math.random() * MUSICAL_NOTES.length)];
      const note = document.createElement("div");

      note.className = `${styles.note} ${styles.left}`;
      note.textContent = noteData.char;
      note.setAttribute("data-name", noteData.name);

      const size = Math.random() * 24 + 16;
      const duration = Math.random() * 10 + 10;

      note.style.cssText = `
        font-size: ${size}px;
        animation-duration: ${duration}s;
        left: ${Math.random() * 20}px; /* Небольшой разброс по X */
        color: hsl(${Math.random() * 60 + 190}, 80%, 65%);
      `;

      containerRef.current?.appendChild(note);

      setTimeout(() => note.remove(), duration * 1000);
    };

    // Правая колонка (снизу вверх)
    const spawnRightColumnNote = () => {
      const noteData =
        MUSICAL_NOTES[Math.floor(Math.random() * MUSICAL_NOTES.length)];
      const note = document.createElement("div");

      note.className = `${styles.note} ${styles.right}`;
      note.textContent = noteData.char;
      note.setAttribute("data-name", noteData.name);

      const size = Math.random() * 24 + 16;
      const duration = Math.random() * 10 + 10;

      note.style.cssText = `
        font-size: ${size}px;
        animation-duration: ${duration}s;
        right: ${Math.random() * 20}px; /* Небольшой разброс по X */
        color: hsl(${Math.random() * 60 + 290}, 80%, 65%);
      `;

      containerRef.current?.appendChild(note);

      setTimeout(() => note.remove(), duration * 1000);
    };

    const leftInterval = setInterval(spawnLeftColumnNote, 1000);
    const rightInterval = setInterval(spawnRightColumnNote, 1200);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
