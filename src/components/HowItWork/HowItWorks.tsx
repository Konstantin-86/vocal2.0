import Title from "@/components/Title";
import Steps from "@/components/HowItWork/StepsList";

import HowItWorkSlider from "./HowItWorkSlider";

import styles from "@/styles/HowItWork/HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        <Title text="Как проходят занятия" color="var(--accent)" />
        <p className={styles.subtitle}>
          Каждый урок — это шаг к уверенному и красивому пению. Я работаю над
          техникой, эмоциями и вашим уникальным стилем!
        </p>
        <Steps />
        <div className={styles.formats}>
          <h3>Форматы занятий:</h3>
          <ul>
            <li>
              🎤 <strong>Индивидуально</strong> — персональный подход.
            </li>
            <li>
              👥 <strong>Групповые</strong> — дуэты/ансамбли (по желанию).
            </li>
            <li>
              🌐 <strong>Онлайн</strong> — Zoom/Skype с записью урока.
            </li>
            <li>
              🏠 <strong>Оффлайн</strong> — студия в Москве (м. Тверская).
            </li>
          </ul>
        </div>
      </div>
      <HowItWorkSlider />
    </section>
  );
};

export default HowItWorks;
