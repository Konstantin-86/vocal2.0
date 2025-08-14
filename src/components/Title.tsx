"use client";
import { useInView } from "react-intersection-observer";

import styles from "@/styles/Title.module.css";

interface IProps {
  text: string;
  repeatOne?: boolean;
}

const Title = ({ text, repeatOne = false }: IProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: repeatOne,
  });
  return (
    <div ref={ref}>
      <h2 className={inView ? styles.text : styles.texthide}>{text}</h2>
    </div>
  );
};

export default Title;
