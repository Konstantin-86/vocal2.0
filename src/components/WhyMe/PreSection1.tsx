"use client";
import { useInView } from "react-intersection-observer";
import img1 from "@/images/WhyMe/img1.jpg";
import Image from "next/image";

import styles from "@/styles/WhyMe/PreSection1.module.css";
const Content1 = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className={styles.content}>
      <h2
        ref={titleRef}
        className={`${styles.title} ${titleInView ? styles.titleVisible : ""}`}
      >
        Вы научитесь петь
      </h2>

      <div
        ref={contentRef}
        className={`${styles.contentBlock} ${
          contentInView ? styles.contentVisible : ""
        }`}
      >
        <p className={styles.subtitle}>
          Мы не просто учим петь — мы помогаем{" "}
          <span className={styles.highlight}>выражать эмоции</span> и{" "}
          <span className={styles.highlight}>чувствовать музыку</span> телом.
        </p>

        <div className={styles.visualGrid}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={img1}
              width={300}
              height={300}
              alt="Техника вокала"
            />

            <div className={styles.imageCaption}>Правильная техника</div>
          </div>

          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✓</div>
              <span>Избавление от зажимов</span>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✓</div>
              <span>Расширение диапазона</span>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✓</div>
              <span>Свобода звукоизвлечения</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
