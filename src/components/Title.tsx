"use client";
import { useInView } from "react-intersection-observer";

import styles from "@/styles/Title.module.css";

interface IProps {
  text: string;
  repeatOne?: boolean;
  color?: string;
}

const Title = ({ text, repeatOne = false, color = "var(--text)" }: IProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: repeatOne,
  });
  return (
    <div ref={ref}>
      <h2 style={{ color }} className={inView ? styles.text : styles.texthide}>
        {text}
      </h2>
    </div>
  );
};

export default Title;
