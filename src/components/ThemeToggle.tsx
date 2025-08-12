// components/ThemeToggle.tsx
"use client"; // Если используете Next.js 13+

import useTheme from "@/hooks/useTheme";

import styles from "@/styles/ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={theme === "light" ? styles.light : styles.dark}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
