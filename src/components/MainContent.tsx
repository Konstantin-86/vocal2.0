"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "@/styles/MainContent.module.css";

const MainContent = () => {
  const [ref, inView] = useInView({
    threshold: 0.3, // Срабатывает когда 50% элемента видно
    triggerOnce: false, // Отслеживать постоянно (не только первый раз)
  });
  const [ref2, inView2] = useInView({
    threshold: 0.3, // Срабатывает когда 50% элемента видно
    triggerOnce: false, // Отслеживать постоянно (не только первый раз)
  });
  return (
    <div className={styles.inner}>
      <div ref={ref}>
        <h2 className={inView ? styles.text : styles.texthideleft}>
          Header inside viewport{" "}
        </h2>
      </div>
      <div ref={ref2}>
        <h2 className={inView2 ? styles.text : styles.texthideright}>
          Header inside viewport{" "}
        </h2>
      </div>
    </div>
  );
};

export default MainContent;
