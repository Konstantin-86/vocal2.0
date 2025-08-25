import Image from "next/image";
import img from "@/images/WhyMe/img2.jpg";

import styles from "@/styles/WhyMe/PreSection.module.css";

const Content2 = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>свободно и уверенно</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <ul className={styles.perks}>
            <li className={styles.perkItem}>
              <span className={styles.perkIcon}>🎤</span>
              <span className={styles.perkText}>
                Избавитесь от зажимов и страха петь
              </span>
            </li>
            <li className={styles.perkItem}>
              <span className={styles.perkIcon}>🎶</span>
              <span className={styles.perkText}>
                Научитесь брать высокие ноты без напряжения
              </span>
            </li>
            <li className={styles.perkItem}>
              <span className={styles.perkIcon}>👂</span>
              <span className={styles.perkText}>
                Разовьёте музыкальный слух и ритм
              </span>
            </li>
            <li className={styles.perkItem}>
              <span className={styles.perkIcon}>🌟</span>
              <span className={styles.perkText}>
                Подготовитесь к выступлениям или записи
              </span>
            </li>
          </ul>
        </div>

        <div className={styles.imageContainer}>
          <Image alt="Урок вокала" src={img} />
          <div className={styles.imageCaption}>
            Индивидуальные занятия в комфортной студии
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
